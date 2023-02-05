import React, { useRef, useState } from "react";
import "./menu-dropdown.scss";

export const MenuDropdown = () => {
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
      <button
        className="options-btn"
        onClick={() => {
          setShow(!show);
        }}
      >
        Options
        <div className="icon">
          {show ? (
            <i className="fa-solid fa-angle-up"></i>
          ) : (
            <i className="fa-solid fa-angle-down"></i>
          )}
        </div>
      </button>
      {show && (
        <div ref={menuRef} className="options-value">
          <ul>
            <li
              onClick={() => {
                setShow(!show);
              }}
            >
              <i class="fa-regular fa-pen-to-square"></i>
              Edit
            </li>

            <li
              onClick={() => {
                setShow(!show);
              }}
            >
              <i class="fa-regular fa-clone"></i>
              Duplicate
            </li>

            <li
              onClick={() => {
                setShow(!show);
              }}
            >
              <i class="fa-regular fa-box-archive"></i>
              Archive
            </li>

            <li
              onClick={() => {
                setShow(!show);
              }}
            >
              <i class="fa-regular fa-arrow-up-right-from-square"></i>
              Move
            </li>

            <li
              onClick={() => {
                setShow(!show);
              }}
            >
              <i class="fa-regular fa-trash"></i>
              Delete
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
