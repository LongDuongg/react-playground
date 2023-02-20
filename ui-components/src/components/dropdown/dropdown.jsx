import React, { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import "./dropdown.scss";
import cn from "classnames";

export default function Dropdown({ renderToggle, renderExpand, className }) {
  const [show, setShow] = useState();
  const ref = useRef();

  useClickOutside({ ref, handler: () => setShow(false) });

  return (
    <div ref={ref} className={cn("dropdown-r32", className)}>
      <div className="toggle">
        {renderToggle({ showExpand: (v) => setShow(v), expanding: show })}
      </div>
      {show && (
        <div className="expand">
          {renderExpand({ close: () => setShow(false) })}
        </div>
      )}
    </div>
  );
}
