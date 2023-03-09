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
            ? { backgroundColor: "#6b7280" }
            : { backgroundColor: "#9197a3" }
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
