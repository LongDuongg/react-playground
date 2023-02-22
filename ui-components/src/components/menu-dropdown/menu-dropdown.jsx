import React from "react";
import Dropdown from "../dropdown/dropdown";
import "./menu-dropdown.scss";

export const MenuDropdown = ({ title, options }) => {
  return (
    <Dropdown
      className="menu-dropdown-lkj"
      renderToggle={({ showExpand, expanding }) => {
        return (
          <button
            className="menu-btn"
            onClick={() => {
              showExpand(!expanding);
            }}
          >
            {title}
            <div className="icon">
              {expanding ? (
                <i className="fa-solid fa-angle-up"></i>
              ) : (
                <i className="fa-solid fa-angle-down"></i>
              )}
            </div>
          </button>
        );
      }}
      renderExpand={({ close }) => {
        return (
          <div className="menu-list">
            {options.map((option, i) => {
              return (
                <div
                  key={i}
                  className="option"
                  onClick={() => {
                    close();
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
      expandDistance={10}
      expandWidth={250}
    />
  );
};
