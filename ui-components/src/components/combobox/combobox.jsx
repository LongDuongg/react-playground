import React, { useRef, useState } from "react";
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
  const [state, setState] = useState({
    searchText: "",
    selected: "",
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
              ref={inputRef}
              type="text"
              value={state?.searchText || state?.selected}
              onChange={(e) => {
                setState({
                  ...state,
                  searchText: e.target.value,
                  selected: "",
                });
                showExpand(!expanding);
              }}
              placeholder={placeholder}
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
            {searchedList.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    close();
                    onChange(item);
                    setState({ ...state, selected: getLabel(item) });
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
