import React from "react";
import "./disclosure.scss";

export const Disclosure = () => {
  return (
    <div className="disclosure-wrapper-bnm">
      <div className="disclosure-group">
        <div className="toggle">
          What is your refund policy ?
          <div className="icon">
            <i className="fa-solid fa-angle-up"></i>
          </div>
        </div>
        <div className="expand">
          If you're unhappy with your purchase for any reason, email us within
          90 days and we'll refund you in full, no questions asked.
        </div>
      </div>
      <div className="disclosure-group">
        <div className="toggle">
          Do you offer technical support ?
          <div className="icon">
            <i className="fa-solid fa-angle-up"></i>
          </div>
        </div>
        <div className="expand">No.</div>
      </div>
    </div>
  );
};
