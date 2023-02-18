import React, { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import "./listbox.scss";

export const Listbox = ({ list, getLabel, onChange, isSelected }) => {
  const [show, setShow] = useState();
  const listboxRef = useRef();

  useClickOutside({ ref: listboxRef, handler: () => setShow(false) });

  const selected = list.find((item) => isSelected(item));

  // const truncateTextWithEllipsis = (text, max) => {
  // console.log(text.length);

  // if (text.length <= max) {
  // return text;
  // } else {
  // return text.substr(0, max - 1) + "...";
  // console.log(text.substr(0, max - 1) + "...");
  // }
  // };

  return (
    <div ref={listboxRef} className="listbox-select-asd">
      <div className="toggle">
        <div
          onClick={() => {
            setShow(!show);
            // truncateTextWithEllipsis("Durward Reynolds Durward Reynolds", 16);
          }}
          className="options-btn"
        >
          {selected && getLabel(selected)}
          <i className="fa-solid fa-list icon"></i>
        </div>
      </div>

      {show && (
        <div className="expand">
          <div className="options-value">
            {list.map((item, i) => {
              return (
                <div
                  key={i}
                  className="option"
                  onClick={() => {
                    setShow(!show);
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
        </div>
      )}
    </div>
  );
};
//
