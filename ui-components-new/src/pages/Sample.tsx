// import MenuDropdown from "../components/menu-dropdown/menu-dropdown";
// import Listbox from "../components/listbox/listbox";
// import Combobox from "../components/combobox/combobox";
import Popover from "../components/popover/popover";
import clsn from "classnames";
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
              <>
                <div className="list ">
                  {solutions.map((item) => {
                    // TODO
                    return (
                      <div className="container w-full cursor-pointer relative mt-2 mb-2 py-6 pr-6 pl-26 hover:bg-[#ffedd5] hover:rounded-2xl">
                        <div className="image absolute left-4 top-[50%] transform -translate-y-1/2">
                          <i
                            className={clsn(
                              item.iconclass,
                              "p-7 bg-[#fb923c] rounded-2xl",
                            )}
                          />
                        </div>
                        <div className="content">
                          <div className="title">{item.title}</div>
                          <div className="text">{item.text}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="foot w-full p-4 rounded cursor-pointer bg-[#878787] text-stone-50">
                  <div className="title">Documentation</div>
                  <div className="text">
                    Start integrating products and tools
                  </div>
                </div>
              </>
            );
          }}
          expandWidth={450}
          expandPosition="right"
        />
      </div>
    </div>
  );
}
