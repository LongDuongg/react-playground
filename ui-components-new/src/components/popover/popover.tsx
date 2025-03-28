import { useState, useRef } from "react";
import clsn from "classnames";
import { useClickOutside } from "../../hook/useClickOutside";

type Props = {
  renderToggle: ({
    showExpand,
    isOpen,
  }: {
    showExpand: (v: boolean) => void;
    isOpen: boolean;
  }) => any;
  renderExpand: ({ close }: { close: () => void }) => any;
  className?: string;
  expandDistance?: number;
  expandWidth?: number | string;
  expandPosition?: "left" | "right";
  onPassiveClose?: () => void;
};

export default function Popover({
  renderToggle,
  renderExpand,
  className,
  expandDistance,
  expandWidth,
  expandPosition,
  onPassiveClose,
}: Props) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useClickOutside({
    ref: ref,
    handler: () => {
      setShow(false);
      onPassiveClose?.();
    },
  });

  return (
    <div ref={ref} className={clsn("popover relative w-fit", className)}>
      <div className="toggle">
        {renderToggle({ showExpand: (v) => setShow(v), isOpen: show })}
      </div>
      <div
        className="expand bg-stone-50 rounded p-2 absolute ease-in-out transition-all duration-300"
        // TODO
        style={{
          ...(expandPosition === "left" ? { left: 0 } : { right: 0 }),
          top: show ? `calc(100% + ${expandDistance})` : "calc(100% + 10px)",
          opacity: show ? "1" : "0",
          visibility: show ? "visible" : "hidden",
          width: expandWidth,
        }}
      >
        {renderExpand({ close: () => setShow(false) })}
      </div>
    </div>
  );
}
