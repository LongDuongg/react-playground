import React, { useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import "./modal.scss";

export const Modal = ({ isOpen, onClose, title, content, btnText }) => {
  const modalRef = useRef();
  useClickOutside({ ref: modalRef, handler: () => onClose() });
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div ref={modalRef} className="modal-container">
            <div className="title">
              <div>{title}</div>
            </div>
            <div className="content">{content}</div>
            <button onClick={() => onClose()} className="btn">
              {btnText}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
