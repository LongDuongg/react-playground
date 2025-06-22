import {Link, useNavigate} from "react-router-dom";

import {LikeButton} from "../home/like-button.js";
import {FollowButton} from "./follow-button.js";

import {formatDate} from "../../common/utils/date.js";
import {Article} from "../../types/article.js";
import {useAuth} from "../../context/auth.js";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {QUERY_KEYS} from "../../constant/query-keys.js";
import {useApis} from "../../context/apis.js";

type Props = {
  article: Article;
};

export const ArticleMeta = ({article}: Props) => {
  const queryClient = useQueryClient();

  const {user} = useAuth();

  return (
    <div className="article-meta">
      <Link to={`/profile/${article.author.username}`}>
        <img src={article.author.image} />
      </Link>
      <div className="info">
        <Link to={`/profile/${article.author.username}`} className="author">
          {article.author?.username}
        </Link>
        <span className="date">{formatDate(article.createdAt)}</span>
      </div>

      {article.author?.username === user?.username ? (
        <>
          <Link to={`/editor/${article.slug}`}>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-edit"></i> Edit Article
            </button>
          </Link>
          &nbsp;&nbsp;
          {DeleteButton({article: article})}
        </>
      ) : (
        <>
          <FollowButton
            userInfo={article.author}
            onFollow={(updatedProfile) => {
              queryClient.setQueryData([QUERY_KEYS.auth.profile, article.author.username], {...article, author: updatedProfile});
            }}
          />
          &nbsp;&nbsp;
          <LikeButton
            label={"Favorite Post"}
            article={article}
            onChange={(updatedArticle) => {
              queryClient.setQueryData([QUERY_KEYS.unAuth.article, article.slug], {
                article: updatedArticle,
              });
            }}
          />
          &nbsp;&nbsp;
        </>
      )}
    </div>
  );
};

const DeleteButton = ({article}: Props) => {
  const {apis} = useApis();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await apis.article.deleteArticle({
        slug: article?.slug,
      });

      if (!res.errors) {
        navigate("/");
      }
    },
  });

  return (
    <button
      className="btn btn-sm btn-outline-danger"
      disabled={mutation.isPending}
      onClick={async () => {
        mutation.mutate();
      }}
    >
      <i className="ion-trash-a"></i> Delete Article
    </button>
  );
};
