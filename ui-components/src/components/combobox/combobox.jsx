import React, { useRef } from "react";
import Dropdown from "../dropdown/dropdown";
import "./combobox.scss";

export const Combobox = ({
  list,
  getLabel,
  onChange,
  isSelected,
  placeholder,
}) => {
  const inputRef = useRef();
  const selected = list.find((item) => isSelected(item));

  return (
    <Dropdown
      className="combobox-b22"
      renderToggle={({ showExpand, expanding }) => {
        return (
          <div className="combobox-input">
            <input
              ref={inputRef}
              type="text"
              value={"" || selected}
              placeholder=""
            />
            <i
              className="fa-solid fa-list icon"
              onClick={() => {
                showExpand(!expanding);
                inputRef.current.focus();
              }}
            ></i>
          </div>
        );
      }}
      renderExpand={({ close }) => {
        return (
          <div className="combobox-list">
            {list.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    close();
                    onChange(item);
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
      expandDistance={15}
      expandWidth={305}
    />
  );
};
