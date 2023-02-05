import React, { useRef, useState } from "react";
import "./menu-dropdown.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faPenToSquare,
  faClone,
  faBoxArchive,
  faArrowUpRightFromSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export const MenuDropdown = () => {
  const [show, setShow] = useState();
  const menuRef = useRef();

  window.addEventListener("click", (e) => {
    // if (e.target !== menuRef.current) {
    //   setShow(false);
    // }
    console.log(e.target === menuRef.current);
  });

  return (
    <div className="menu-dropdown-lkj">
      <button
        className="options-btn-hjk"
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
        <div ref={menuRef} className="options-value-ghf">
          <ul>
            <li
              onClick={() => {
                setShow(!show);
              }}
            >
              <FontAwesomeIcon className="edit-bnm" icon={faPenToSquare} />
              Edit
            </li>

            <li
              onClick={() => {
                setShow(!show);
              }}
            >
              <FontAwesomeIcon className="duplicate-aaa" icon={faClone} />
              Duplicate
            </li>

            <li
              onClick={() => {
                setShow(!show);
              }}
            >
              <FontAwesomeIcon className="archive-bbb" icon={faBoxArchive} />
              Archive
            </li>

            <li
              onClick={() => {
                setShow(!show);
              }}
            >
              <FontAwesomeIcon
                className="move-ccc"
                icon={faArrowUpRightFromSquare}
              />
              Move
            </li>

            <li
              onClick={() => {
                setShow(!show);
              }}
            >
              <FontAwesomeIcon className="delete-ddd" icon={faTrash} />
              Delete
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
