import React, { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import "./dropdown.scss";
import clns from "classnames";

export default function Dropdown({
  renderToggle,
  renderExpand,
  className,
  expandDistance,
  expandWidth,
  onPassiveClose,
}) {
  const [show, setShow] = useState();
  const ref = useRef();

  useClickOutside({
    ref,
    handler: () => {
      setShow(false);
      onPassiveClose?.();
    },
  });

  return (
    <div ref={ref} className={clns("dropdown-r32", className)}>
      <div className="toggle">
        {renderToggle({ showExpand: (v) => setShow(v), expanding: show })}
      </div>
      {show && (
        <div
          className="expand"
          style={{
            top: `calc(100% + ${expandDistance}px)`,
            width: expandWidth,
          }}
        >
          {renderExpand({ close: () => setShow(false) })}
        </div>
      )}
    </div>
  );
}
