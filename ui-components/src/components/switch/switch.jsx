import React, { useState } from "react";
import "./switch.scss";

export const Switch = () => {
  const [check, setCheck] = useState();

  return (
    <div className="switch-toggle-abc">
      <div
        className="switch-btn"
        style={{ backgroundColor: check ? "#0e0b5e" : "#3734a0" }}
        onClick={() => {
          setCheck(!check);
        }}
      >
        <div
          className="white-circle"
          style={{ left: check ? "54px" : "5px" }}
        />
      </div>
    </div>
  );
};
