import clns from "classnames";
import { useState, useRef } from "react";
import { useClickOutside } from "../../hook/useClickOutside";

type RenderToggle = ({
  showExpand,
  isOpen,
}: {
  showExpand: (v: boolean) => void;
  isOpen: boolean;
}) => any;

type RenderExpand = ({ close }: { close: () => void }) => any;

type Props = {
  renderToggle: RenderToggle;
  renderExpand: RenderExpand;
  className?: string;
  expandDistance?: number;
  expandWidth?: number | string;
  onPassiveClose?: () => void;
  expandPosition?: "left" | "right";
};

export default function Dropdown({
  renderToggle,
  renderExpand,
  className,
  expandDistance,
  expandWidth,
  onPassiveClose,
  expandPosition = "left",
}: Props) {
  const [show, setShow] = useState(false);

  const ref = useRef(null);

  useClickOutside({
    ref,
    handler: () => {
      setShow(false);
      onPassiveClose?.();
    },
  });

  return (
    <div ref={ref} className={clns("dropdown", "w-full relative", className)}>
      <div className="toggle w-full">
        {renderToggle({
          showExpand: (v: boolean) => setShow(v),
          isOpen: show,
        })}
      </div>
      {show && (
        <div
          style={{
            width: expandWidth,
            top: `calc(100% + ${expandDistance}px)`,
            ...(expandPosition === "left" ? { left: 0 } : { right: 0 }),
          }}
          className="expand bg-blue-400 rounded p-2 absolute"
        >
          {renderExpand({
            close: () => setShow(false),
          })}
        </div>
      )}
    </div>
  );
}
