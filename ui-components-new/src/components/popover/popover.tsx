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
  leftDistance?: string;
  rightDistance?: string;
  onPassiveClose?: () => void;
};

export default function Popover({
  renderToggle,
  renderExpand,
  className,
  expandDistance,
  expandWidth,
  onPassiveClose,
  leftDistance,
  rightDistance,
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
    <div ref={ref} className={clsn("popover relative", className)}>
      <div className="toggle w-full">
        {renderToggle({ showExpand: (v) => setShow(v), isOpen: show })}
      </div>
      <div
        className="expand bg-stone-50 rounded p-2 absolute"
        style={{
          ...(leftDistance
            ? { left: `calc(0% - ${leftDistance})` }
            : rightDistance
            ? { right: `calc(0% - ${rightDistance})` }
            : { left: "calc(0% - 110px)" }),
          top: show ? `calc(100% + ${expandDistance})` : "calc(100% + 10px)",
          opacity: show ? "1" : "0",
          visibility: show ? "visible" : "hidden",
          transition: "all 500ms ease",
          width: expandWidth,
        }}
      >
        {renderExpand({ close: () => setShow(false) })}
      </div>
    </div>
  );
}
