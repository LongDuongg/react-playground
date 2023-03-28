import React, { useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import clns from "classnames";
import "./modal.scss";

export const Modal = ({ isOpen, onClose, className, renderContent }) => {
  const modalRef = useRef();
  useClickOutside({ ref: modalRef, handler: () => onClose() });

  return (
    isOpen && (
      <div className="modal-overlay-las">
        <div ref={modalRef} className={clns("modal-container", className)}>
          {renderContent({ close: () => onClose() })}
        </div>
      </div>
    )
  );
};
