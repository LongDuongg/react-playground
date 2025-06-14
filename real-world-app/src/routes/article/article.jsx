import { useNavigate, useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { Layout } from "../layout/layout.jsx";
import { CommentSection } from "./comment-section.jsx";

import { ArticleMeta } from "./article-meta.jsx";

export const Article = () => {
    if (article.loading) {
        return (
            <div className="article-page">
                <div className="banner">
                    <div className="container">
                        <h1>Loading...</h1>
                    </div>
                </div>
            </div>
        );
    }

    if (article.value?.errors) {
        return (
            <div className="article-page" style={{ color: "red", marginTop: "10px" }}>
                <div className="banner">
                    <div className="container">
                        <h1>{article.value.errors.body[0]}</h1>
                    </div>
                </div>
            </div>
        );
    }

    if (article.value.article == null) {
        return (
            <div className="article-page">
                <div className="banner">
                    <div className="container">
                        <h1>Article not found</h1>
                    </div>
                </div>
            </div>
        );
    }

    // console.log(article.value.article);

    return (
        <div className="article-page">
            <div className="banner">
                <div className="container">
                    <h1>{article.value.article?.title}</h1>
                    {ArticleMeta({ article })}
                </div>
            </div>

            <div className="container page">
                <div className="row article-content">
                    <div className="col-md-12">
                        {article.value.article?.body && (
                            <ReactMarkdown>{article.value.article.body}</ReactMarkdown>
                        )}

                        <p>{article.value.article?.description}</p>
                        <ul className="tag-list">
                            {article.value.article?.tagList.map((tag, i) => (
                                <li key={i} className="tag-default tag-pill tag-outline">
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-xs-12 col-md-8 offset-md-2">
                        {CommentSection({ slug: params.slug })}
                    </div>
                </div>
            </div>
        </div>
    );
};
