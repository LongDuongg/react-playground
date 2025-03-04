// import MenuDropdown from "../components/menu-dropdown/menu-dropdown";
// import Listbox from "../components/listbox/listbox";
// import Combobox from "../components/combobox/combobox";
import Popover from "../components/popover/popover";
import { useState } from "react";
import { options, list, solutions } from "../mockdata/mockdata";

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
        {/* <Combobox
          list={list}
          getLabel={(item) => item.text}
          isSelected={(item) => item.value === listboxState}
          onChange={(item) => setListboxState(item.value)}
        /> */}
        <Popover
          renderToggle={({ showExpand, isOpen }) => {
            return (
              <button
                onClick={() => {
                  showExpand(!isOpen);
                }}
                className="btn bg-indigo-500 text-stone-50 p-2 rounded font-bold hover:bg-indigo-600 cursor-pointer"
              >
                Solutions
                {isOpen ? (
                  <i className="fa-solid fa-angle-up ml-3" />
                ) : (
                  <i className="fa-solid fa-angle-down ml-3" />
                )}
              </button>
            );
          }}
          renderExpand={({ close }) => {
            return (
              <div className="list ">
                {solutions.map((item) => {
                  return (
                    <div className="content cursor-pointer relative flex justify-center align-middle">
                      <div className="image absolute left-0 top-3">
                        <i className={item.iconclass} />
                      </div>
                      <div className="sub-content ml-10">
                        <div className="title">{item.title}</div>
                        <div className="text">{item.text}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}
