import {Tabs} from "./tab";
import {ArticlePreviewList, ARTICLES_PER_PAGE} from "./article-preview-list.tsx";
import {useState} from "react";
import {useApis} from "../../context/apis.tsx";
import {useAuth} from "../../context/auth.tsx";
import {FeedPanelProps} from "../../types/feed-panel.ts";

export const FeedPanel = ({selectedTag, onChange}: FeedPanelProps) => {
  const {apis} = useApis();
  const {user} = useAuth();

  const tabs = [
    user && {
      key: "your-feed",
      label: "Your Feed",

      render: () =>
        ArticlePreviewList({
          getData: ({page}: {page: number}) =>
            apis.article.getMyFeed({
              username: user.username,
              page,
              limit: ARTICLES_PER_PAGE,
            }),
        }),
    },
    {
      key: "global-feed",
      label: "Global Feed",

      render: () =>
        ArticlePreviewList({
          getData: ({page}: {page: number}) =>
            apis.article.getGlobalFeed({
              page,
              limit: ARTICLES_PER_PAGE,
            }),
        }),
    },
    selectedTag && {
      key: `${selectedTag}`,
      label: `#${selectedTag}`,
      render: () =>
        ArticlePreviewList({
          getData: ({page}: {page: number}) =>
            apis.article.getFeedByTag({
              page,
              tag: selectedTag,
              limit: ARTICLES_PER_PAGE,
            }),
        }),
      forced: true,
    },
  ].filter((v) => v);

  const forcedIndex = tabs.findIndex((tab) => tab.forced);

  const [active, setActive] = useState<number>(forcedIndex || user ? 1 : 0);

  return Tabs({
    tabs,

    isActive: (tab, index: number) => {
      const activeIndex = forcedIndex || active;
      return index === activeIndex;
    },
    onChange: (i: number) => {
      if (forcedIndex && i === forcedIndex) {
        return;
      }
      setActive(i);
      onChange();
    },
  });
};
