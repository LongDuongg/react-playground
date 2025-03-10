import clns from "classnames";
import { useState } from "react";

type Props = {
  className?: string;
  toggleText: string;
  renderExpand: () => any;
  toggleColor: string;
  toggleBackGround: string;
  toggleBackGroundHover: string;
  expandColor: string;
  expandDistance: number;
};

export default function Disclosure(props: Props) {
  const [show, setShow] = useState<boolean>();
  const [hover, setHover] = useState<boolean>();

  return (
    <div className={clns("disclosure w-full mt-4 relative", props.className)}>
      <div
        className="toggle w-full cursor-pointer relative rounded-[6px]"
        style={{
          backgroundColor: hover
            ? props.toggleBackGroundHover
            : props.toggleBackGround,
          color: props.toggleColor,
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
        <div className="text py-2 pl-4">{props.toggleText}</div>
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
            color: props.expandColor,
            marginTop: `${props.expandDistance}px`,
          }}
        >
          {props.renderExpand()}
        </div>
      )}
    </div>
  );
}
