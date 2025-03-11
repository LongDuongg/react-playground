import clns from "classnames";
import { useState } from "react";

type Props = {
  className?: string;
  toggleText: string;
  expandText?: string;
  renderExpand?: () => any;
  toggleColor?: string;
  toggleBackGround?: string;
  toggleBackGroundHover?: string;
  expandColor?: string;
  expandDistance?: number;
};

export default function Disclosure({
  className,
  toggleText,
  expandText,
  renderExpand,
  toggleColor = "#fff",
  toggleBackGround = "#dd95ed",
  toggleBackGroundHover = "#c479d4",
  expandColor = "rgb(14 14 14)",
  expandDistance = 0,
}: Props) {
  const [show, setShow] = useState<boolean>();
  const [hover, setHover] = useState<boolean>();

  return (
    <div className={clns("disclosure w-full mt-4 relative", className)}>
      <div
        className="toggle w-full cursor-pointer relative rounded-[6px]"
        style={{
          backgroundColor: hover ? toggleBackGroundHover : toggleBackGround,
          color: toggleColor,
        }}
        onClick={() => {
          setShow(!show);
        }}
        onMouseOver={() => {
          setHover(!hover);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
      >
        <div className="text py-2 pl-4">{toggleText}</div>
        <div className="icon absolute right-4 top-[50%] transform -translate-y-1/2">
          {show ? (
            <i className="fa-solid fa-angle-down" />
          ) : (
            <i className="fa-solid fa-angle-up" />
          )}
        </div>
      </div>
      {show && (
        <div
          className="expand w-full"
          style={{
            color: expandColor,
            marginTop: `${expandDistance}px`,
          }}
        >
          <div className="text px-4 py-2 w-full">
            {renderExpand ? renderExpand() : expandText}
          </div>
        </div>
      )}
    </div>
  );
}
