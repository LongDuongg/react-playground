import React, { useState } from "react";
import { Combobox } from "../components/combobox/combobox";

export const TestCombobox = () => {
  const [state, setState] = useState({
    name: "",
    selected: "",
  });

  return (
    <div className="" style={{ width: 300 }}>
      <Combobox
        list={[
          { name: "Durward Reynolds" },
          { name: "Kenton Towne" },
          { name: "Therese Wunsch" },
          { name: "Benedict Kessler" },
          { name: "Katelyn Rohan" },
        ]}
        getLabel={(item) => item.name}
        onChange={(item) =>
          setState({ ...state, name: item.name, selected: item.name })
        }
        isSelected={(item) => item.name === state.name}
        getSelected={() => state.selected}
        setSelected={() => setState({ ...state, selected: "" })}
      />
    </div>
  );
};
