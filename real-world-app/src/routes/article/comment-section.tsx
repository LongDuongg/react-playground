import {useQuery, useQueryClient} from "@tanstack/react-query";
import {formatDate} from "../../common/utils/date";
import {useApis} from "../../context/apis";
import {QUERY_KEYS} from "../../constant/query-keys";
import {Comment} from "../../types/comment";

type Props = {
  slug?: string | undefined;
  onAdd?: (comment: Comment) => void;
  onDelete?: (id: number) => void;
  comment?: Comment;
};

export const CommentSection = ({slug}: Props) => {
  const queryClient = useQueryClient();

  const {apis} = useApis();

  const comments = useQuery({
    queryKey: [QUERY_KEYS.unAuth.comments, slug],
    queryFn: () => apis.article.getComments({slug: slug}),
  });

  if (comments.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <CommentForm
        slug={slug}
        onAdd={(comment: Comment) => {
          queryClient.setQueryData([QUERY_KEYS.unAuth.comments, slug], {
            comments: [comment, ...comments.data.comments],
          });
        }}
      />
      {!comments.data.comments.length ? (
        <div>There are no comments yet...</div>
      ) : (
        comments.data.comments.map((comment: Comment, i: number) => (
          <CommentCard
            comment={comment}
            slug={slug}
            onDelete={(id: number) => {
              queryClient.setQueryData([QUERY_KEYS.unAuth.comments, slug], {
                comments: comments.data.comments.filter((comment: Comment) => comment.id !== id),
              });
            }}
          />
        ))
      )}
    </>
  );
};

export const CommentForm = ({slug, onAdd}: Props) => {
  return (
    <form className="card comment-form">
      <div className="card-block">
        <textarea className="form-control" placeholder="Write a comment..." rows="3" {...bindInput(scope(state, ["body"]))}></textarea>
      </div>
      <div className="card-footer">
        <img src={auth.user.image} className="comment-author-img" />
        <button
          className="btn btn-sm btn-primary"
          disabled={isLoading.value}
          onClick={async (e) => {
            e.preventDefault();
            isLoading.onChange(true);
            const res = await apis.article.commentArticle({
              slug: slug,
              body: state.value.body,
            });

            if (!res.errors) {
              onAdd(res.comment);
              state.onChange("");
            }

            isLoading.onChange(false);
          }}
        >
          Post Comment
        </button>
      </div>
    </form>
  );
};

export const CommentCard = ({comment, slug, onDelete}: Props) => {
  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{comment?.body}</p>
      </div>
      <div className="card-footer">
        <a href={`/profile/${comment.author?.username}`} className="comment-author">
          <img src={comment.author?.image} className="comment-author-img" />
        </a>
        &nbsp;
        <a href={`/profile/${comment.author?.username}`} className="comment-author">
          {comment.author?.username}
        </a>
        <span className="date-posted">{formatDate(comment?.createdAt)}</span>
        {comment.author?.username === auth.user?.username && (
          <span
            className="mod-options"
            onClick={async () => {
              const res = await apis.article.deleteComment({
                slug: slug,
                id: comment?.id,
              });

              if (!res.errors) {
                onDelete(comment?.id);
              }
            }}
          >
            <i className="ion-trash-a"></i>
          </span>
        )}
      </div>
    </div>
  );
};
