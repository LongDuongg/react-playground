import {Tabs} from "./tab";
import {ArticlePreviewList, ARTICLES_PER_PAGE} from "./article-preview-list.tsx";
import {useState} from "react";
import {useApis} from "../../context/apis.tsx";
import {useAuth} from "../../context/auth.tsx";

export const FeedPanel = ({selectedTag, onChange}: {selectedTag: string; onChange: () => void}) => {
  const {apis} = useApis();
  const {user} = useAuth();

  const tabs = [
    user && {
      key: "your-feed",
      label: "Your Feed",

      render: () => (
        <ArticlePreviewList
          extraQueryKey={"your-feed"}
          getData={({page}) =>
            apis.article.getMyFeed({
              username: user.username,
              page,
              limit: ARTICLES_PER_PAGE,
            })
          }
        />
      ),
    },
    {
      key: "global-feed",
      label: "Global Feed",

      render: () => (
        <ArticlePreviewList
          extraQueryKey={"global-feed"}
          getData={({page}) =>
            apis.article.getGlobalFeed({
              page,
              limit: ARTICLES_PER_PAGE,
            })
          }
        />
      ),
    },

    selectedTag && {
      key: `${selectedTag}`,
      label: `#${selectedTag}`,
      render: () => (
        <ArticlePreviewList
          extraQueryKey={`${selectedTag}`}
          getData={({page}) =>
            apis.article.getFeedByTag({
              page,
              tag: selectedTag,
              limit: ARTICLES_PER_PAGE,
            })
          }
        />
      ),
      forced: true,
    },
  ].filter((v) => v);

  const forcedIndex = (() => {
    const index = tabs.findIndex((tab) => tab.forced);
    return index > -1 ? index : null;
  })();

  const [active, setActive] = useState(forcedIndex || user ? 1 : 0);

  return (
    <Tabs
      tabs={tabs}
      isActive={(tab, index) => {
        const activeIndex = forcedIndex || active;
        return index === activeIndex;
      }}
      onChange={(i) => {
        if (forcedIndex && i === forcedIndex) {
          return;
        }
        setActive(i);
        onChange();
      }}
    />
  );
};
