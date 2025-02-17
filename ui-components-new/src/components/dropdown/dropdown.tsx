import clns from "classnames";
import { useState, useRef } from "react";
import { useClickOutside } from "../../hook/useClickOutside";

export type RenderToggle = ({
  showExpand,
  isOpen,
}: {
  showExpand: (v: boolean) => void;
  isOpen: boolean;
}) => any;

export type RenderExpand = ({ close }: { close: () => void }) => any;

type Props = {
  className: string;
  renderToggle: RenderToggle;
  renderExpand: RenderExpand;
  expandWidth: number | string;
  top: number | string;
  bottom: number | string;
  left: number | string;
  right: number | string;
  toggleWidth: number | string;
};

export default function Dropdown({
  className,
  renderToggle,
  renderExpand,
  expandWidth,
  top,
  bottom,
  left,
  right,
  toggleWidth
}: Props) {
  const [show, setShow] = useState(false);

  const ref = useRef(null);

  useClickOutside({
    ref,
    handler: () => setShow(false),
  });

  return (
    <div ref={ref} className={clns("dropdown", className)}>
      <div style={{width: toggleWidth}} className="toggle">
        {renderToggle({
          showExpand: (v: boolean) => setShow(v),
          isOpen: show,
        })}
      </div>
      {show && (
        <div
          style={{ width: expandWidth, top: top, bottom: bottom, left: left, right: right }}
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
