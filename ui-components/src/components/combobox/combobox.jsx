import React, { useRef, useState } from "react";
import { bindInput } from "../../common/bindInput";
import { setKey } from "../../common/setKey";
import Dropdown from "../dropdown/dropdown";
import "./combobox.scss";

export const Combobox = ({
  list,
  getLabel,
  onChange,
  isSelected,
  getSelected,
  setSelected,
  placeholder = "Choose or search options...",
}) => {
  const selected = list.find((item) => isSelected(item));
  const inputRef = useRef();
  const [state, setState] = useState({
    searchText: "",
  });

  const searchedList =
    state.searchText === null
      ? list
      : list.filter((item) =>
          item.name.toLowerCase().includes(state.searchText.toLowerCase())
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
                  value: state.searchText || getSelected(),
                  onChange: (v) => {
                    setSelected();
                    setState(setKey(state, "searchText", v));
                    showExpand(!expanding);
                  },
                }),
                placeholder: placeholder,
                ref: inputRef,
              }}
            />
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
                    // setSelected(item);
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
      expandDistance={5}
      expandWidth={305}
    />
  );
};
