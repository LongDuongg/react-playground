import React, { useState } from "react";
import { Switch } from "../components/switch/switch";

export const TestSwitch = () => {
  const [enabled, setEnabled] = useState();

  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={() => {
          setEnabled(!enabled);
        }}
        activeBackgroundColor={"red"}
        inactiveBackgroundColor={"blue"}
      />
    </div>
  );
};
