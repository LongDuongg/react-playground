import React from "react";
import { Disclosure } from "../components/disclosure/disclosure";

export const TestDisclosure = () => {
  return (
    <>
      <div
        className="disclosure-wrapper"
        style={{
          width: "505px",
          backgroundColor: "#a6a5a4",
          borderRadius: "22px",
          paddingTop: "10px",
        }}
      >
        <Disclosure />
        <Disclosure
          toggleText={"What is your refund policy ?"}
          expandText={
            "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
          }
          toggleBackGround={"#dd95ed"}
          toggleBackGroundHover={"#c479d4"}
          expandColor={"#fff"}
        />
        <Disclosure
          toggleText={"Do you offer technical support ?"}
          expandText={"No."}
          toggleBackGround={"#5a36eb"}
          toggleBackGroundHover={"#4927d6"}
          expandColor={"#fff"}
        />
      </div>
    </>
  );
};
