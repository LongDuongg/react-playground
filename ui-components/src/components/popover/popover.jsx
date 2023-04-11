import React, { useState, useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import clns from "classnames";
import "./popover.scss";

export const Popover = ({
  renderToggle,
  renderExpand,
  className,
  expandDistance,
  expandPosition,
}) => {
  const [show, setShow] = useState();
  const ref = useRef();

  useClickOutside({
    ref,
    handler: () => {
      setShow(false);
    },
  });

  return (
    <div ref={ref} className={clns("popover-fgh", className)}>
      <div className="toggle">
        {renderToggle({ showExpand: (v) => setShow(v), expanding: show })}
      </div>
      <div
        className="expand"
        style={{
          top: show ? `calc(100% + ${expandDistance})` : "calc(100% + 10px)",
          left: `calc(0% - ${expandPosition})`,
          opacity: show ? "1" : "0",
          visibility: show ? "visible" : "hidden",
          transition: "all 500ms ease",
        }}
      >
        {renderExpand({ close: () => setShow(false) })}
      </div>
    </div>
  );
};
