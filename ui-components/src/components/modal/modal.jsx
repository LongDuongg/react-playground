import React from "react";
import "./modal.scss";

export const Modal = ({ isOpen, onClose, title, content, btnText }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
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
