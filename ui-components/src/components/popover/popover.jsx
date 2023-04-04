import React from "react";
import "./popover.scss";

export const Popover = () => {
  return (
    <div className="popover-fgh">
      <div className="toggle">
        <button className="btn">
          Solutions
          <div className="icon">
            <i className="fa-solid fa-angle-down"></i>
          </div>
        </button>
      </div>
      <div className="expand"></div>
    </div>
  );
};
