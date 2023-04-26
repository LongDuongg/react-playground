import React, { useRef, useState } from "react";
import clns from "classnames";
import "./radio.scss";
import { useClickOutside } from "../../hooks/useClickOutside";

export const Radio = ({
  choice,
  renderRadio,
  className,
  activeBG,
  inactiveBG,
}) => {
  const [checked, setChecked] = useState();
  const ref = useRef();

  useClickOutside({
    ref: ref,
    handler: () => setChecked(false),
  });

  return (
    <div
      ref={ref}
      style={{
        ...(checked && {
          border: "4px solid #91d9e6",
          borderRadius: "0.6rem",
        }),
        margin: "10px 0px",
      }}
    >
      <div
        className={clns("radio-lag", className)}
        onClick={(e) => {
          if (ref.current.contains(e.target)) {
            setChecked(true);
          }
          console.log(e);
        }}
        style={{
          backgroundColor: checked ? `${activeBG}` : `${inactiveBG}`,
        }}
      >
        {renderRadio({
          option: choice,
          isSelected: checked,
        })}
      </div>
    </div>
  );
};
