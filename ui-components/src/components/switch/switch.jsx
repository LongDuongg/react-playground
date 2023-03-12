import React from "react";
import "./switch.scss";
import cn from "classnames";

export const Switch = ({
  checked,
  onChange,
  activeBackgroundColor = "#0e0b5e",
  inactiveBackgroundColor = "#3734a0",
}) => {
  return (
    <div className="switch-toggle-abc">
      <div
        className="switch-btn"
        style={{
          background: checked ? activeBackgroundColor : inactiveBackgroundColor,
        }}
        onClick={() => {
          onChange();
        }}
      >
        <div className={cn("white-circle", { checked })} />
      </div>
    </div>
  );
};
