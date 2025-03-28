// import MenuDropdown from "../components/menu-dropdown/menu-dropdown";
// import Listbox from "../components/listbox/listbox";
// import Combobox from "../components/combobox/combobox";
// import Popover from "../components/popover/popover";
// import { RadioGroup } from "../components/radio-group/radio-group";
// import Disclosure from "../components/disclosure/disclosure";
import { Switch } from "../components/switch/switch";
import { Tab, TabHeader, TabPanel } from "../components/tab/tab";
import clsn from "classnames";
import { useState } from "react";
import {
  options,
  list,
  solutions,
  plans,
  TABS_MOCK_DATA,
} from "../mockdata/mockdata";
// import Dialog from "../components/dialog/dialog";

export default function Sample() {
  const [state, seState] = useState<any>(TABS_MOCK_DATA[0].id);
  const [selected, seSelected] = useState<any>();
  const [show, setShow] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const selectedTab = TABS_MOCK_DATA.find((item) => item.id === state);

  return (
    <div className="">
      <div className="w-[590px] ml-auto mr-auto">
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
        {/* <Disclosure
          toggleText="What is your refund policy"
          expandText="If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
        />
        <Disclosure
          toggleText="Do you offer technical support?"
          renderExpand={() => {
            return (
              <div>
                Yes! We have a dedicated support team ready to answer your
                questions.
              </div>
            );
          }}
        /> */}
        {/* <div>
          <button
            onClick={() => setShow(true)}
            className="btn mt-4 cursor-pointer rounded-2xl p-3 bg-blue-500 hover:bg-blue-700"
          >
            Open dialog
          </button>
          <Dialog
            isOpen={show}
            onClose={() => setShow(false)}
            className={"payment"}
            renderContent={({ close }) => {
              return (
                <>
                  <div className="title">
                    <div>Payment successful</div>
                  </div>
                  <div className="content my-2.5">
                    Your payment has been successfully submitted. We have sent
                    you an email with all of the details of your order.
                  </div>
                  <button
                    onClick={() => close()}
                    className="btn cursor-pointer rounded-2xl p-3 bg-blue-500 hover:bg-blue-700"
                  >
                    Got it, thanks !
                  </button>
                </>
              );
            }}
          />
        </div> */}
        {/* <RadioGroup
          list={plans}
          isSelected={(item) => item.id === state}
          onChange={(item) => seState(item.id)}
        /> */}
        {/* <Switch
          checked={enabled}
          onChange={() => {
            setEnabled(!enabled);
          }}
        /> */}
        {/* <Tab
          list={TABS_MOCK_DATA}
          contentDistance={10}
          isActive={(item) => item.id === state}
          onChange={(item) => {
            seState(item.id);
          }}
        /> */}
        <TabHeader
          tabs={TABS_MOCK_DATA}
          isActive={(item) => item.id === state}
          onChange={(item) => {
            seState(item.id);
          }}
          className="mt-9"
        />

        <TabPanel className="mt-10">
          {selectedTab?.details.map((detail: any, i: number) => {
            return (
              <div
                key={i}
                style={{
                  border: detail.title === selected ? "4px solid #3E8E9E" : "",
                }}
                onClick={() => {
                  seSelected(detail.title);
                  console.log(detail);
                }}
                className="content rounded-[10px] p-3 cursor-pointer hover:bg-blue-700"
              >
                <div className="title text-amber-50">{detail.title}</div>
                <div className="detail">
                  {detail.date} - {detail.commentCount} comments -{" "}
                  {detail.shareCount} shares
                </div>
              </div>
            );
          })}
        </TabPanel>

        <div className="mt-10 flex space-x-4">
          {TABS_MOCK_DATA.map((item, i) => {
            return (
              <button
                key={i}
                onClick={() => {
                  seState(item.id);
                }}
                className="bg-amber-700 cursor-pointer"
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
