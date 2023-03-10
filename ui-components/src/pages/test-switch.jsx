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
        switchHeight={"40px"}
        circleHeight={"32px"}
        circleWidth={"32px"}
        mainBGColor={"#0e0b5e"}
        extraBGColor={"#3734a0"}
        transitionDuration={"200ms"}
      />
    </div>
  );
};
