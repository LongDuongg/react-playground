import React, { useEffect, useRef, useState } from "react";
import { bindInput } from "../../common/bindInput";
import { setKey } from "../../common/setKey";
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
  });

  // useEffect(() => {
  //   setState({
  //     searchText: getLabel(selected),
  //   });
  // }, [getLabel(selected)]);

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
                  value: state?.searchText,
                  onChange: (v) => {
                    setState(setKey(state, "searchText", v));
                    showExpand(!expanding);
                  },
                }),
                placeholder: placeholder,
                ref: inputRef,
              }}
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
