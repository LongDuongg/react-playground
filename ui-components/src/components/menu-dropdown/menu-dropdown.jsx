import React, { useRef, useState } from "react";
import Dropdown from "../dropdown/dropdown";
import "./menu-dropdown.scss";

export const MenuDropdown = ({ title, options }) => {
  const [show, setShow] = useState();
  const menuRef = useRef();

  return (
    <Dropdown
      showOptions={show}
      componentName="menu-dropdown-lkj"
      componentRef={menuRef}
      eventListener={() => setShow(false)}
      renderToggle={() => {
        return (
          <button
            className="options-btn"
            onClick={() => {
              setShow(!show);
            }}
          >
            {title}
            <div className="icon">
              {show ? (
                <i className="fa-solid fa-angle-up"></i>
              ) : (
                <i className="fa-solid fa-angle-down"></i>
              )}
            </div>
          </button>
        );
      }}
      renderExpand={() => {
        return (
          <div className="options-value">
            {options.map((option, i) => {
              return (
                <div
                  key={i}
                  className="option"
                  onClick={() => {
                    setShow(!show);
                    alert(option.text);
                  }}
                >
                  <i className={option.iconClass} />
                  {option.text}
                </div>
              );
            })}
          </div>
        );
      }}
    />
  );
};
