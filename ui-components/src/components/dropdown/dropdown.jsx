import React, { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

export default function Dropdown({ renderToggle, renderExpand, className }) {
  const [show, setShow] = useState();
  const ref = useRef();

  useClickOutside({ ref, handler: () => setShow(false) });

  return (
    <div ref={ref} className={className}>
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
