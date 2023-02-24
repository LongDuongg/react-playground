import React, { useRef } from "react";
import Dropdown from "../dropdown/dropdown";
import "./combobox.scss";

export const Combobox = () => {
  const inputRef = useRef();

  return (
    <Dropdown
      className="combobox-b22"
      renderToggle={({ showExpand, expanding }) => {
        return (
          <div className="combobox-input">
            <input ref={inputRef} type="text" placeholder="" />
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
                  }}
                  key={index}
                  className="option"
                >
                  <i className="fa-solid fa-check " />
                  {item.name}
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

const list = [
  { name: "Durward Reynolds" },
  { name: "Kenton Towne" },
  { name: "Therese Wunsch" },
  { name: "Benedict Kessler" },
  { name: "Katelyn Rohan" },
];
