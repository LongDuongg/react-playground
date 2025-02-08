import clns from "classnames";
import { useState, useRef } from "react";
import { useClickOutside } from "../../hook/useClickOutside";

type Props = {
  className: string;
  renderToggle: any;
  renderExpand: any;
  expandWidth: any;
};

export default function Dropdown({
  className,
  renderToggle,
  renderExpand,
  expandWidth,
}: Props) {
  const [show, setShow] = useState(false);

  const ref = useRef(null);

  useClickOutside({
    ref,
    handler: () => setShow(false),
  });

  return (
    <div ref={ref} className={clns("dropdown", className)}>
      <div className="toggle">
        {renderToggle({
          showExpand: (v: boolean) => setShow(v),
          isOpen: show,
        })}
      </div>
      {show && (
        <div
          style={{ width: expandWidth }}
          className="expand bg-blue-400 rounded p-2 absolute right-0 top-[50px]"
        >
          {renderExpand({
            close: () => setShow(false),
          })}
        </div>
      )}
    </div>
  );
}
