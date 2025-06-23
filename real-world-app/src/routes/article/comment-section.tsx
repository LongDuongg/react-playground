import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {formatDate} from "../../common/utils/date";
import {useApis} from "../../context/apis";
import {QUERY_KEYS} from "../../constant/query-keys";
import {Comment} from "../../types/comment";
import {Form, Button, Input} from "antd";
import {useAuth} from "../../context/auth";

export const CommentSection = ({slug}: {slug: string}) => {
  const queryClient = useQueryClient();

  const {apis} = useApis();

  const comments = useQuery({
    queryKey: [QUERY_KEYS.article.comments, slug],
    queryFn: () => apis.article.getComments({slug: slug}),
  });

  const setComments = (value: Comment[]) => {
    queryClient.setQueryData([QUERY_KEYS.article.comments, slug], {
      comments: value,
    });
  };

  if (comments.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <CommentForm
        slug={slug}
        onAdd={(comment: Comment) => {
          setComments([comment, ...comments.data.comments]);
        }}
      />
      {!comments.data.comments.length ? (
        <div>There are no comments yet...</div>
      ) : (
        comments.data.comments.map((comment: Comment, i: number) => (
          <CommentCard
            key={i}
            comment={comment}
            slug={slug}
            onDelete={(id: number) => {
              setComments(comments.data.comments.filter((comment: Comment) => comment.id !== id));
            }}
          />
        ))
      )}
    </>
  );
};

export const CommentForm = ({slug, onAdd}: {slug: string; onAdd: (comment: Comment) => void}) => {
  const [form] = Form.useForm();
  const {user} = useAuth();
  const {apis} = useApis();
  const mutation = useMutation({
    mutationFn: async ({body}: {body?: string}) => {
      const res = await apis.article.commentArticle({
        slug: slug,
        body: body,
      });

      if (!res.errors) {
        onAdd?.(res.comment);
        form.setFieldsValue({comment: ""});
      }
    },
  });

  return (
    <Form
      form={form}
      name="comment-form"
      labelCol={{span: 8}}
      wrapperCol={{span: 16}}
      style={{maxWidth: 600}}
      onFinish={(value) => {
        mutation.mutate({body: value.comment});
      }}
      autoComplete="off"
    >
      <Form.Item name="comment">
        <Input.TextArea placeholder="Write a comment..." />
      </Form.Item>

      <Form.Item label={null}>
        <div className="card-footer">
          <img src={user.image} className="comment-author-img" />
        </div>
        <Button type="primary" htmlType="submit" disabled={mutation.isPending}>
          Post Comment
        </Button>
      </Form.Item>
    </Form>
  );
};

export const CommentCard = ({comment, slug, onDelete}: {comment: Comment; slug: string; onDelete: (id: number) => void}) => {
  const {user} = useAuth();
  const {apis} = useApis();

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await apis.article.deleteComment({
        slug: slug,
        id: comment.id,
      });

      if (!res.errors) {
        onDelete(comment.id);
      }
    },
  });

  return (
    <div className="card">
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>
      <div className="card-footer">
        <a href={`/profile/${comment.author?.username}`} className="comment-author">
          <img src={comment.author?.image} className="comment-author-img" />
        </a>
        &nbsp;
        <a href={`/profile/${comment.author?.username}`} className="comment-author">
          {comment.author?.username}
        </a>
        <span className="date-posted">{formatDate(comment.createdAt)}</span>
        {comment.author?.username === user?.username && (
          <span
            className="mod-options"
            onClick={async () => {
              mutation.mutate();
            }}
          >
            <i className="ion-trash-a"></i>
          </span>
        )}
      </div>
    </div>
  );
};
