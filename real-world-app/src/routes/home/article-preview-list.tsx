import {useState} from "react";
import {NavLink} from "react-router-dom";
import {useQuery, useQueryClient} from "@tanstack/react-query";

import {Pagination} from "./pagination.tsx";
import {LikeButton} from "./like-button.tsx";

import {formatDate} from "../../common/utils/date";

import {QUERY_KEYS} from "../../constant/query-keys.ts";
import {ArticlePreviewListProps, SingleArticle} from "../../types/article.ts";

export const ARTICLES_PER_PAGE = 3;

export const ArticlePreviewList = ({
  getData,
  extraQueryKey,
}: {
  getData: ({page, limit}: {page: number; limit: number}) => Promise<any>;
  extraQueryKey: string;
}) => {
  const queryClient = useQueryClient();

  const [page, setPage] = useState(0);

  const feeds = useQuery({
    queryKey: [QUERY_KEYS.unAuth.feed, extraQueryKey, page],
    queryFn: () => getData({page, limit: ARTICLES_PER_PAGE}),
  });

  if (feeds.isLoading) {
    return "Loading...";
  }

  if (feeds.data?.errors) {
    return <div style={{color: "red", marginTop: "10px"}}>{feeds.data.errors.body[0]}</div>;
  }

  if (!feeds.data.articles?.length) {
    return "No data";
  }

  return (
    <>
      {feeds.data.articles?.map((article: SingleArticle, i: number) => {
        return (
          <div key={i} className="article-preview">
            <div className="article-meta">
              <NavLink to={`/profile/${article.author.username}`}>
                <img src={article.author.image} />
              </NavLink>
              <div className="info">
                <NavLink to={`/profile/${article.author.username}`} className="author">
                  {article.author.username}
                </NavLink>
                <span className="date">{formatDate(article.createdAt)}</span>
              </div>
              {/* <LikeButton
                className={"pull-xs-right"}
                article={article}
                onChange={async (updatedArticle: SingleArticle) => {
                  queryClient.setQueryData([QUERY_KEYS.unAuth.feed], {
                    ...feeds.data,
                    articles: feeds.data.articles.map((a: SingleArticle) => (a.slug === updatedArticle.slug ? updatedArticle : a)),
                  });
                }}
              /> */}
            </div>
            <NavLink to={`/article/${article.slug}`} className="preview-link">
              <h1>{article.title}</h1>
              <p>{article.description}</p>
              <span>Read more...</span>
              <ul className="tag-list">
                {article.tagList.map((tag: string, i: number) => {
                  return (
                    <li key={i} className="tag-default tag-pill tag-outline">
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </NavLink>
          </div>
        );
      })}

      <Pagination
        currentPage={page}
        onChange={(currentPage: number) => setPage(currentPage)}
        totalPages={Math.ceil(feeds.data.articlesCount / ARTICLES_PER_PAGE)}
      />
    </>
  );
};
