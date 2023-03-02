import React, { useRef, useState } from "react";
import { bindInput } from "../../common/bindInput";
import Dropdown from "../dropdown/dropdown";
import "./combobox.scss";

export const Combobox = ({
  list,
  getLabel,
  onChange,
  isSelected,
  placeholder = "Choose or search options...",
}) => {
  const selected = list.find((item) => isSelected(item));
  const inputRef = useRef();

  const [searchText, setSearchText] = useState();

  const searchedList = !searchText
    ? list
    : list.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );

  return (
    <Dropdown
      className="combobox-b22"
      renderToggle={({ showExpand, expanding }) => {
        return (
          <div className="combobox-input">
            <input
              {...{
                ...bindInput({
                  // why ?? not ||
                  value: searchText ?? (selected && getLabel(selected)),
                  onChange: (v) => {
                    setSearchText(v);
                    // why
                    if (!expanding) {
                      showExpand(true);
                    }
                  },
                }),
                placeholder: placeholder,
                ref: inputRef,
              }}
            />
            {/* why use wrapper */}
            <div
              className="icon-wrapper"
              onClick={() => {
                showExpand(!expanding);
                inputRef.current.focus();
              }}
            >
              <i className="fa-solid fa-list icon"></i>
            </div>
          </div>
        );
      }}
      renderExpand={({ close }) => {
        return (
          <div className="combobox-list">
            {searchedList.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    onChange(item);
                    // why
                    setSearchText(null);
                    close();
                  }}
                  key={index}
                  className="option"
                >
                  {isSelected(item) && <i className="fa-solid fa-check " />}
                  {getLabel(item)}
                </div>
              );
            })}
          </div>
        );
      }}
      // why
      onPassiveClose={() => setSearchText(null)}
      expandDistance={5}
      expandWidth={305}
    />
  );
};
