import {useQuery} from "@tanstack/react-query";
import {useApis} from "../../context/apis";
import {QUERY_KEYS} from "../../constant/query-keys";

export const TagPanel = ({title, onSelect}: {title: string; onSelect: (v: string) => void}) => {
  const {apis} = useApis();

  const tags = useQuery({
    queryKey: [QUERY_KEYS.unAuth.tags],
    queryFn: () => apis.tag.getTags(),
  });

  return (
    <div className="sidebar">
      <p>{title}</p>
      <div className="tag-list">
        {tags.data?.tags.slice(0, 89).map((tag: any, i: any) => (
          <div
            style={{cursor: "pointer"}}
            key={i}
            className="tag-pill tag-default"
            onClick={() => {
              onSelect(tag);
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};
