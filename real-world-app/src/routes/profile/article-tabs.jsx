import { useLocation, Link } from "react-router-dom";

import { ArticlePreviewList } from "../home/article-preview-list";
import { Tabs } from "../home/tab";

export const ArticleTabs = ({ profile }) => {
    const username = profile.username;
    const tabs = [
        {
            key: "my-articles",
            label: "My Articles",
            renderLabel: (children) => {
                return (
                    <Link to={`/profile/${username}`} style={{ textDecoration: "none" }}>
                        {children}
                    </Link>
                );
            },
            path: `/profile/${username}`,
            render: () =>
                ArticlePreviewList({
                    getData: ({ page }) => apis.article.getMyFeed({ username, page }),
                }),
        },
        {
            key: "favorited-articles",
            label: "Favorited Articles",
            renderLabel: (children) => {
                return (
                    <Link to={`/profile/${username}/favorite`} style={{ textDecoration: "none" }}>
                        {children}
                    </Link>
                );
            },
            path: `/profile/${username}/favorite`,
            render: () =>
                ArticlePreviewList({
                    getData: ({ page }) => apis.article.getFavoritedArticles({ username, page }),
                }),
        },
    ];

    return <Tabs tabs={tabs} isActive={(tab) => tab.path === location.pathname} />;
};
