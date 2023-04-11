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
      {show && (
        <div
          className={clns("expand", { show })}
          style={{
            top: show ? `calc(100% + ${expandDistance})` : "30px",
            left: `calc(0% - ${expandPosition})`,
            transition: "top 500ms",
            opacity: show ? "1" : "0",
          }}
        >
          {renderExpand({ close: () => setShow(false) })}
        </div>
      )}
    </div>
  );
};
