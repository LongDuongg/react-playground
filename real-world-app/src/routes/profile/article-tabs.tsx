import React from "react";
import {useLocation, Link} from "react-router-dom";

import {Tabs} from "../home/tab";
import {useApis} from "../../context/apis";
import {ProfilePayload} from "../../types/profile";
import {ArticlePreviewList} from "../home/article-preview-list";

export const ArticleTabs = ({profile}: {profile: ProfilePayload}) => {
  const {apis} = useApis();
  const location = useLocation();
  const username = profile?.username;
  const tabs = [
    {
      key: "my-articles",
      label: "My Articles",
      renderLabel: (children: React.ReactNode) => {
        return (
          <Link to={`/profile/${username}`} style={{textDecoration: "none"}}>
            {children}
          </Link>
        );
      },
      path: `/profile/${username}`,
      render: () => <ArticlePreviewList extraQueryKey={"my-articles"} getData={({page}) => apis.article.getMyFeed({username, page})} />,
    },
    {
      key: "favorited-articles",
      label: "Favorited Articles",
      renderLabel: (children: React.ReactNode) => {
        return (
          <Link to={`/profile/${username}/favorite`} style={{textDecoration: "none"}}>
            {children}
          </Link>
        );
      },
      path: `/profile/${username}/favorite`,
      render: () => (
        <ArticlePreviewList
          extraQueryKey={"favorited-articles"}
          getData={({page}) => apis.article.getFavoritedArticles({username, page})}
        />
      ),
    },
  ];

  return <Tabs tabs={tabs} isActive={(tab) => tab.path === location.pathname} />;
};
