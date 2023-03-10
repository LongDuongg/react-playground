import React from "react";
import "./switch.scss";

export const Switch = ({
  check,
  onChange,
  switchHeight,
  circleHeight,
  circleWidth,
  mainBGColor,
  extraBGColor,
  transitionDuration,
}) => {
  return (
    <div className="switch-toggle-abc">
      <div
        className="switch-btn"
        style={{
          backgroundColor: check ? mainBGColor : extraBGColor,
          transition: `background-color ${transitionDuration}`,
          height: switchHeight,
        }}
        onClick={() => {
          onChange();
        }}
      >
        <div
          className="white-circle"
          style={{
            left: check ? "54px" : "5px",
            transition: `left ${transitionDuration}`,
            height: circleHeight,
            width: circleWidth,
          }}
        />
      </div>
    </div>
  );
};
