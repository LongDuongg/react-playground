// import MenuDropdown from "../components/menu-dropdown/menu-dropdown";
import { useState } from "react";
import Listbox from "../components/listbox/listbox";
import { options, list } from "../mockdata/mockdata";

export default function Sample() {
  const [listboxState, setListboxState] = useState("");

  return (
    <div className="">
      <div className="w-[150px] ml-auto mr-auto">
        {/* <MenuDropdown title="Options" options={options} /> */}
        <Listbox
          list={list}
          getLabel={(item) => item.text}
          isSelected={(item) => item.value === listboxState}
          onChange={(item) => setListboxState(item.value)}
        />
      </div>
    </div>
  );
}
