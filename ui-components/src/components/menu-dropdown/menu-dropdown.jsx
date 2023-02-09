import React, { useEffect, useRef, useState } from "react";
import "./menu-dropdown.scss";

export const MenuDropdown = ({ title, options }) => {
  const [show, setShow] = useState();
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShow(show);
        console.log("Click outside");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="menu-dropdown-lkj">
      <div className="toggle">
        <button
          className="options-btn"
          onClick={() => {
            setShow(!show);
          }}
        >
          {title}
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
          <div className="options-value">
            {options.map((option, i) => {
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
