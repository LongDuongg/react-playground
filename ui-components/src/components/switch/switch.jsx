import React from "react";
import "./switch.scss";

export const Switch = ({
  check,
  onChange,
  mainBGColor,
  extraBGColor,
  x1Coordinate,
  x2Coordinate,
}) => {
  return (
    <div className="switch-toggle-abc">
      <div
        className="switch-btn"
        style={{ backgroundColor: check ? mainBGColor : extraBGColor }}
        onClick={() => {
          onChange();
        }}
      >
        <div
          className="white-circle"
          style={{ left: check ? x1Coordinate : x2Coordinate }}
        />
      </div>
    </div>
  );
};
