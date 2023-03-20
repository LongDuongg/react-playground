import React from "react";
import { Disclosure } from "../components/disclosure/disclosure";
import "./test-disclosure.scss";

export const TestDisclosure = () => {
  return (
    <div className="disclosure-wrapper">
      <Disclosure
        className={"lorem-ispum-asd"}
        toggleText={"What is your refund policy ?"}
        renderExpand={() => {
          return (
            <div className="text">
              People Also Ask (PAA) is a Google SERP feature that provides users
              with additional questions related to their original search query
              and quick answers to them
              <img src="https://picsum.photos/200/100" alt="" />
            </div>
          );
        }}
        toggleBackGround={"#dd95ed"}
        toggleBackGroundHover={"#c479d4"}
        expandColor={"#fff"}
      />
      <Disclosure
        className={"list-bbb"}
        toggleText={"Do you offer technical support ?"}
        renderExpand={() => {
          return (
            <div className="list">
              <ul>
                <li>Links</li>
                <li>Keeping in touch with old friends</li>
                <li>It is the technology of the future!</li>

                <ul>
                  <li>New games</li>
                  <li>
                    New applications
                    <ol type="I">
                      <li>For business</li>
                      <li>For pleasure</li>
                    </ol>
                  </li>
                  <li>Around the clock news</li>
                  <li>Search engines</li>
                  <li>Shopping</li>
                  <li>
                    Programming
                    <ol type="a">
                      <li>XML</li>
                      <li>Java</li>
                      <li>XHTML</li>
                      <li>Scripts</li>
                      <li>New languages</li>
                    </ol>
                  </li>
                </ul>
              </ul>
            </div>
          );
        }}
        toggleBackGround={"#5a36eb"}
        toggleBackGroundHover={"#4927d6"}
        expandColor={"#fff"}
      />
    </div>
  );
};
