import { useRef } from "react";
import { useClickOutside } from "../../hook/useClickOutside";
import clns from "classnames";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  renderContent: ({ close }: { close: () => void }) => any;
};

export default function Dialog(props: Props) {
  const modalRef = useRef(null);
  useClickOutside({
    ref: modalRef,
    handler: () => {
      props.onClose();
    },
  });

  return (
    props.isOpen && (
      <div
        className={clns(
          "dialog-overlay fixed top-0 bottom-0 left-0 right-0 bg-[#8a8987]",
          props.className
        )}
      >
        <div
          ref={modalRef}
          className="dialog-container bg-[#f0f0f0] h-fit absolute top-[50%] left-[50%] transform -translate-x-1/2 transform -translate-y-1/2 rounded-3xl w-[50%] p-6"
        >
          {props.renderContent({ close: () => props.onClose() })}
        </div>
      </div>
    )
  );
}
