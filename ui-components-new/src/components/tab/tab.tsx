import { useState, useEffect } from "react";

type Props = {
  list: any[];
  contentDistance: number;
  isActive: (v: any) => boolean;
  onChange: (v: any) => void;
};

export function Tab({ list, contentDistance, isActive, onChange }: Props) {
  const [state, seState] = useState<any>();
  const [selected, seSelected] = useState(false);
  useEffect(() => {
    isActive(list[0].id);
    onChange(list[0]);
    if (list.length > 0) {
      seState({ ...list[0] });
    }
  }, [list]);
  return (
    <div className="tab mt-9 relative p-2 bg-[#51A7BF] flex space-x-4 rounded-[10px]">
      {list.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              onChange(item);
              seState({ ...item });
            }}
            style={{
              backgroundColor: isActive(item) ? "#fff" : "#51A7BF",
              color: isActive(item) ? "#51A7BF" : "#fff",
            }}
            className="tab-name text-[20px] py-2 px-14  cursor-pointer rounded-[10px]"
          >
            {item.name}
          </button>
        );
      })}
      <div
        style={{
          top: `calc(100% + ${contentDistance}px)`,
        }}
        className="expand absolute left-0 right-0 bg-[#51A7BF] rounded-[10px] px-4 py-2"
      >
        {state.details.map((detail: any, index: number) => {
          return (
            <div
              key={index}
              style={{
                border: "4px solid #91d9e6",
                borderRadius: "0.6rem",
                margin: "10px 0px",
              }}
              className="content p-3"
            >
              <div className="title text-[20px] text-amber-50">
                {detail.title}
              </div>
              <div className="detail">
                {detail.date} - {detail.commentCount} - {detail.shareCount}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
