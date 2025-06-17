import { NavLink } from "react-router-dom";

import { Pagination } from "./pagination";
import { LikeButton } from "./like-button";

import { formatDate } from "../../common/utils/date";

export const ARTICLES_PER_PAGE = 3;

export const ArticlePreviewList = ({ getData }) => {
    const feeds = getData({ page: page.value, limit: ARTICLES_PER_PAGE });

    if (feeds.loading) {
        return "Loading...";
    }

    if (feeds.value?.errors) {
        return <div style={{ color: "red", marginTop: "10px" }}>{feeds.value.errors.body[0]}</div>;
    }

    if (!feeds.value.articles?.length) {
        return "No data";
    }

    return (
        <>
            {feeds.value.articles?.map((article, i) => {
                return (
                    <div key={i} className="article-preview">
                        <div className="article-meta">
                            <NavLink to={`/profile/${article.author.username}`}>
                                <img src={article.author.image} />
                            </NavLink>
                            <div className="info">
                                <NavLink
                                    to={`/profile/${article.author.username}`}
                                    className="author"
                                >
                                    {article.author.username}
                                </NavLink>
                                <span className="date">{formatDate(article.createdAt)}</span>
                            </div>
                            {LikeButton({
                                className: "pull-xs-right",
                                article,
                                onChange: async (updatedArticle) => {
                                    feeds.onChange({
                                        ...feeds.value,
                                        articles: feeds.value.articles.map((a) =>
                                            a.slug === updatedArticle.slug ? updatedArticle : a
                                        ),
                                    });
                                },
                            })}
                        </div>
                        <NavLink to={`/article/${article.slug}`} className="preview-link">
                            <h1>{article.title}</h1>
                            <p>{article.description}</p>
                            <span>Read more...</span>
                            <ul className="tag-list">
                                {article.tagList.map((tag, i) => {
                                    <li key={i} className="tag-default tag-pill tag-outline">
                                        {tag}
                                    </li>;
                                })}
                            </ul>
                        </NavLink>
                    </div>
                );
            })}

            {Pagination({
                currentPage: page.value,
                onChange: page.onChange,
                totalPages: Math.ceil(feeds.value.articlesCount / ARTICLES_PER_PAGE),
            })}
        </>
    );
};
