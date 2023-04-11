import React from "react";
import { Popover } from "../components/popover/popover";
import "./test-popover.scss";

export const TestPopover = () => {
  return (
    <div>
      <Popover
        className={"solution-mnj"}
        renderToggle={({ showExpand, expanding }) => {
          return (
            <button
              onClick={() => {
                showExpand(!expanding);
              }}
              className="btn"
            >
              Solutions
              <div className="icon">
                {expanding ? (
                  <i className="fa-solid fa-angle-up" />
                ) : (
                  <i className="fa-solid fa-angle-down" />
                )}
              </div>
            </button>
          );
        }}
        renderExpand={() => {
          return (
            <div className="list">
              <div className="content">
                <div className="small-image">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="48" height="48" rx="8" fill="#FFEDD5"></rect>
                    <path
                      d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
                      stroke="#FB923C"
                      strokeWidth="2"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
                      stroke="#FDBA74"
                      strokeWidth="2"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
                      stroke="#FDBA74"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <div className="sub-content">
                  <div className="title">Insights</div>
                  <div className="text">Measure actions your users take</div>
                </div>
              </div>

              <div className="content">
                <div className="small-image">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="48" height="48" rx="8" fill="#FFEDD5"></rect>
                    <path
                      d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
                      stroke="#FB923C"
                      strokeWidth="2"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
                      stroke="#FDBA74"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <div className="sub-content">
                  <div className="title">Automations</div>
                  <div className="text">Create your own targeted content</div>
                </div>
              </div>

              <div className="content">
                <div className="small-image">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="48" height="48" rx="8" fill="#FFEDD5"></rect>
                    <path
                      d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
                      stroke="#FB923C"
                      strokeWidth="2"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
                      stroke="#FDBA74"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <div className="sub-content">
                  <div className="title">Reports</div>
                  <div className="text">Keep track of your growth</div>
                </div>
              </div>

              <div className="foot">
                <div className="title">Documentation</div>
                <div className="text">Start integrating products and tools</div>
              </div>
            </div>
          );
        }}
        expandDistance={"10px"}
        expandPosition={"100px"}
      />
    </div>
  );
};
