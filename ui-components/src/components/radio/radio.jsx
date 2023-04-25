import React, { useState } from "react";
import clns from "classnames";
import "./radio.scss";

export const Radio = ({
  choice,
  renderRadio,
  className,
  activeBG,
  inactiveBG,
}) => {
  const [checked, setChecked] = useState();

  return (
    <div
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
          setChecked(!checked);
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
