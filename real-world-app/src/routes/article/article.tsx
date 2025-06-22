import {useParams} from "react-router-dom";
import ReactMarkdown from "react-markdown";

import {Layout} from "../layout/layout.js";
import {CommentSection} from "./comment-section.js";

import {ArticleMeta} from "./article-meta.js";
import {QUERY_KEYS} from "../../constant/query-keys.js";
import {useQuery} from "@tanstack/react-query";
import {useApis} from "../../context/apis.js";

export const Article = () => {
  const params = useParams();
  const {apis} = useApis();
  const article = useQuery({
    queryKey: [QUERY_KEYS.unAuth.article, params.slug],
    queryFn: () => apis.article.getArticle({slug: params.slug}),
  });

  if (article.isLoading) {
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

  if (article.data?.errors) {
    return (
      <div className="article-page" style={{color: "red", marginTop: "10px"}}>
        <div className="banner">
          <div className="container">
            <h1>{article.data.errors.body[0]}</h1>
          </div>
        </div>
      </div>
    );
  }

  if (article.data.article == null) {
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

  // console.log(article.data.article);

  return (
    <Layout>
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{article.data.article?.title}</h1>
            <ArticleMeta article={article.data.article} />
          </div>
        </div>

        <div className="container page">
          <div className="row article-content">
            <div className="col-md-12">
              {article.data.article?.body && <ReactMarkdown>{article.data.article.body}</ReactMarkdown>}

              <p>{article.data.article?.description}</p>
              <ul className="tag-list">
                {article.data.article?.tagList.map((tag: string, i: number) => (
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
              <CommentSection slug={params.slug} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
