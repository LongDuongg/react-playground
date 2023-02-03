import React from "react";
import "./menu-dropdown.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export const MenuDropdown = () => {
  return (
    <div className="menu-dropdown-lkj">
      <button className="options-btn-hjk">
        Options{" "}
        <FontAwesomeIcon className="arrow-down-bnm" icon={faArrowDown} />
      </button>
    </div>
  );
};
