import classNames from "classnames";
import {Article} from "../../types/article";
import {useMutation} from "@tanstack/react-query";
import {useApis} from "../../context/apis";

export const LikeButton = ({
  label = "",
  className = "",
  article,
  onChange,
}: {
  label?: string;
  className?: string;
  article: Article;
  onChange?: (article: any) => void;
}) => {
  const {apis} = useApis();

  const mutation = useMutation({
    mutationFn: async () => {
      let res;

      if (article?.favorited) {
        res = await apis.article.unlikeArticle({slug: article?.slug});
      } else {
        res = await apis.article.likeArticle({
          slug: article?.slug,
        });
      }

      if (res.errors) {
        // Handle error case
      } else {
        onChange?.(res.article);
      }
    },
  });

  return (
    <button
      className={classNames("btn btn-sm btn-outline-primary", className)}
      style={article?.favorited ? {backgroundColor: "green", color: "white"} : {backgroundColor: "white", color: "green"}}
      disabled={mutation.isPending}
      onClick={async () => {
        mutation.mutate();
      }}
    >
      <i className="ion-heart"></i> {label} {article?.favoritesCount}
    </button>
  );
};
