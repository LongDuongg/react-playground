import React, { useState } from "react";
import { Switch } from "../components/switch/switch";

export const TestSwitch = () => {
  const [enabled, setEnabled] = useState();

  return (
    <div className="">
      <Switch
        check={enabled}
        onChange={() => {
          setEnabled(!enabled);
        }}
        mainBGColor={"#0e0b5e"}
        extraBGColor={"#3734a0"}
        x1Coordinate={"54px"}
        x2Coordinate={"5px"}
      />
    </div>
  );
};
