import React, { useState } from "react";
import { Modal } from "../components/modal/modal";
import "./test-modal.scss";

export const TestModal = () => {
  const [show, setShow] = useState();

  return (
    <div style={{ width: "505px" }}>
      <button onClick={() => setShow(true)} className="btn">
        Buy product
      </button>
      <Modal
        isOpen={show}
        onClose={() => setShow(false)}
        className={"payment-abc"}
        renderContent={({ close }) => {
          return (
            <>
              <div className="title">
                <div>Payment successful</div>
              </div>
              <div className="content">
                Your payment has been successfully submitted. We have sent you
                an email with all of the details of your order.
              </div>
              <button onClick={() => close()} className="btn">
                Got it, thanks !
              </button>
            </>
          );
        }}
      />
    </div>
  );
};
