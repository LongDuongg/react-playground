import React, { useState } from "react";
import "./switch.scss";

export const Switch = () => {
  const [check, setCheck] = useState();

  return (
    <div className="switch-toggle-abc">
      <button
        className="switch-btn"
        style={
          check
            ? { backgroundColor: "#0e0b5e" }
            : { backgroundColor: "#3734a0" }
        }
        onClick={() => {
          setCheck(!check);
        }}
      >
        <span
          className="white-circle"
          style={check ? { left: "53px" } : { right: "5px" }}
        >
          Se
        </span>
      </button>
    </div>
  );
};
