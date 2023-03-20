import React, { useState } from "react";
import clns from "classnames";
import "./disclosure.scss";

export const Disclosure = ({
  className,
  toggleText = "Question ?",
  renderExpand,
  toggleColor = "#fff",
  toggleBackGround = "#dd95ed",
  toggleBackGroundHover = "#c479d4",
  expandColor = "#fff",
}) => {
  const [show, setShow] = useState();
  const [hover, setHover] = useState();

  return (
    <div className={clns("disclosure-bnm", className)}>
      <div
        className="toggle"
        onClick={() => {
          setShow(!show);
        }}
        style={{
          backgroundColor: hover ? toggleBackGroundHover : toggleBackGround,
          color: toggleColor,
        }}
        onMouseOver={() => {
          setHover(!hover);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
      >
        {toggleText}
        <div className="icon">
          {show ? (
            <i className="fa-solid fa-angle-down" />
          ) : (
            <i className="fa-solid fa-angle-up" />
          )}
        </div>
      </div>
      {show && (
        <div className="expand" style={{ color: expandColor }}>
          {renderExpand()}
        </div>
      )}
    </div>
  );
};
