import React, { useRef, useState } from "react";
import "./menu-dropdown.scss";

export const MenuDropdown = ({options}) => {
  const [show, setShow] = useState();
  const menuRef = useRef();

  // TODO : close on clicking outside
  // window.addEventListener("click", (e) => {
  // if (e.target !== menuRef.current) {
  //   setShow(false);
  // }
  // console.log(e.target === menuRef.current);
  // });

  return (
    <div className="menu-dropdown-lkj">
      <div className="toggle">
        <button
          className="options-btn"
          onClick={() => {
            setShow(!show);
          }}
        >
          {options.title}
          <div className="icon">
            {show ? (
              <i className="fa-solid fa-angle-up"></i>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </div>
        </button>
      </div>

      {show && (
        <div className="expand">
          <div ref={menuRef} className="options-value">
            {options.subOptions.map((option, i) => {
              return (
                <div
                  key={i}
                  className="option"
                  onClick={() => {
                    setShow(!show);
                    alert(option.text);
                  }}
                >
                  <i className={option.iconClass} />
                  {option.text}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};


