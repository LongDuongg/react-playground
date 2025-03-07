// import MenuDropdown from "../components/menu-dropdown/menu-dropdown";
// import Listbox from "../components/listbox/listbox";
// import Combobox from "../components/combobox/combobox";
// import Popover from "../components/popover/popover";
import { Radio } from "../components/radio-group/radio-group";
import clsn from "classnames";
import { useState } from "react";
import { options, list, solutions } from "../mockdata/mockdata";

export default function Sample() {
  const [listboxState, setListboxState] = useState("");
  const [selected, setSelected] = useState(false);

  // const computerInfo = [
  //   { name: "Startup", info: "12GB/6 CPUs - 160 GB SSD disk" },
  //   { name: "Business", info: "16GB/8 CPUs · 512 GB SSD disk" },
  //   { name: "Enterprise", info: "32GB/12 CPUs · 1024 GB SSD disk" },
  // ];

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
        {/* <Popover
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
        /> */}
        <div className="computer">
          <Radio
            className={"startup-alm py-3 pl-3"}
            renderRadio={() => {
              return (
                <div className="content relative cursor-pointer">
                  <div className="name">Startup</div>
                  <div className="info">12GB/6 CPUs - 160 GB SSD disk</div>
                  <div className="icon absolute right-0 top-[50%] transform -translate-1/2">
                    {selected && <i className="fa-solid fa-circle-check" />}
                  </div>
                </div>
              );
            }}
            checked={selected}
            onChange={() => setSelected(!selected)}
            activeBG={"#0e658d"}
            inactiveBG={"#91d9e6"}
          />

          <Radio
            className={"business-alm py-3 pl-3"}
            renderRadio={() => {
              return (
                <div className="content relative cursor-pointer">
                  <div className="name">Business</div>
                  <div className="info">16GB/8 CPUs · 512 GB SSD disk</div>
                  <div className="icon absolute right-0 top-[50%] transform -translate-1/2">
                    {selected && <i className="fa-solid fa-circle-check" />}
                  </div>
                </div>
              );
            }}
            checked={selected}
            onChange={() => setSelected(!selected)}
            activeBG={"#0e658d"}
            inactiveBG={"#91d9e6"}
          />

          <Radio
            className={"enterprise-alm py-3 pl-3"}
            renderRadio={() => {
              return (
                <div className="content relative cursor-pointer">
                  <div className="name">Enterprise</div>
                  <div className="info">32GB/12 CPUs · 1024 GB SSD disk</div>
                  <div className="icon absolute right-0 top-[50%] transform -translate-1/2">
                    {selected && <i className="fa-solid fa-circle-check" />}
                  </div>
                </div>
              );
            }}
            checked={selected}
            onChange={() => setSelected(!selected)}
            activeBG={"#0e658d"}
            inactiveBG={"#91d9e6"}
          />
        </div>
      </div>
    </div>
  );
}
