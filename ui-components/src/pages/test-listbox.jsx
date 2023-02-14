import { useState } from "react";
import { Listbox } from "../components/listbox/listbox";

export default function TestListbox() {
  const [state, setState] = useState({
    name: null,
    gender: null,
  });

  return (
    <>
      <Listbox
        list={[
          { name: "Wade Cooper" },
          { name: "Kenton Towne" },
          { name: "Therese Wunsch" },
          { name: "Benedict Kessler" },
          { name: "Katelyn Rohan" },
          { name: "Durward Reynolds" },
        ]}
        getLabel={(item) => item.name}
        onChange={(item) => setState({ ...state, name: item.name })}
        isSelected={(item) => item.name === state.name}
      />

      <Listbox
        list={[
          { value: 0, label: "Female" },
          { value: 1, label: "Male" },
        ]}
        getLabel={(item) => item.label}
        onChange={(item) => setState({ ...state, gender: item.value })}
        isSelected={(item) => item.value === state.gender}
      />
    </>
  );
}
