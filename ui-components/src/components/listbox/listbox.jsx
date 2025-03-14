import React from "react";
import Dropdown from "../dropdown/dropdown";
import "./listbox.scss";

export const Listbox = ({
  list,
  getLabel,
  onChange,
  isSelected,
  placeholder = "Choose something...",
}) => {
  const selected = list.find((item) => isSelected(item));

  // const truncateTextWithEllipsis = (text, max) => {
  //   console.log(text.length);

  //   if (text.length <= max) {
  //     return text;
  //   }

  //   return text.substr(0, max - 1) + "...";
  // };

  return (
    <Dropdown
      className="listbox-select-asd"
      renderToggle={({ showExpand, expanding }) => {
        return (
          <div
            onClick={() => {
              showExpand(!expanding);
              // console.log(
              //   truncateTextWithEllipsis("Durward Reynolds Durward Reynolds", 16)
              // );
            }}
            className="listbox-btn"
          >
            {/* {selected && truncateTextWithEllipsis(getLabel(item), 16)} */}
            {selected ? getLabel(selected) : placeholder}
            <i className="fa-solid fa-list icon"></i>
          </div>
        );
      }}
      renderExpand={({ close }) => {
        return (
          <div className="listbox-list">
            {list.map((item, i) => {
              return (
                <div
                  key={i}
                  className="option"
                  onClick={() => {
                    close();
                    onChange(item);
                  }}
                >
                  {isSelected(item) && <i className="fa-solid fa-check " />}
                  {/* {truncateTextWithEllipsis(getLabel(item), 16)} */}
                  {getLabel(item)}
                </div>
              );
            })}
          </div>
        );
      }}
      expandDistance={3}
      expandWidth={305}
    />
  );
};
