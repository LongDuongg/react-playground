import React, { useState } from "react";
import "./test-modal.scss";
import { Modal } from "../components/modal/modal";

export const Testmodal = () => {
  const [show, setShow] = useState();

  return (
    <div style={{ width: "505px" }}>
      <button onClick={() => setShow(!show)} className="btn">
        Buy product
      </button>
      <Modal
        isOpen={show}
        onClose={() => setShow(false)}
        title={"Payment successful"}
        content={
          "Your payment has been successfully submitted. We have sent you an email with all of the details of your order."
        }
        btnText={"Got it, thanks !"}
      />
    </div>
  );
};
