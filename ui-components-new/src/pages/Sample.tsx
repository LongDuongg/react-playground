// import MenuDropdown from "../components/menu-dropdown/menu-dropdown";
// import Listbox from "../components/listbox/listbox";
import Combobox from "../components/combobox/combobox";
import { useState } from "react";
import { options, list } from "../mockdata/mockdata";

export default function Sample() {
  const [listboxState, setListboxState] = useState("");

  return (
    <div className="">
      <div className="w-[300px] ml-auto mr-auto">
        {/* <MenuDropdown title="Options" options={options} /> */}
        {/* <Listbox
          list={list}
          getLabel={(item) => item.text}
          isSelected={(item) => item.value === listboxState}
          onChange={(item) => setListboxState(item.value)}
        /> */}
        <Combobox
          list={list}
          getLabel={(item) => item.text}
          isSelected={(item) => item.value === listboxState}
          onChange={(item) => setListboxState(item.value)}
        />
      </div>
    </div>
  );
}
