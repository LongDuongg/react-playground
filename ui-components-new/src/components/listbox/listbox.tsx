import Dropdown from "../dropdown/dropdown";
import { useState } from "react";

export type isSelected = (item: string) => boolean;

export type getLabel = (item: string) => string;

type Props = {
  list: {text: string}[];
  isSelected: isSelected;
  getLabel: getLabel;
}

export default function Listbox({list, isSelected}: Props) {

  const selected = list.find((item) => isSelected(item.text));

  return (
    <div className="w-[150px] ml-auto mr-auto">
      <Dropdown  
        className="w-full relative"
        renderToggle={({showExpand, isOpen}) => {
          return (
            <button
              onClick={() => {
                showExpand(!isOpen);
              }}
              className="w-full bg-indigo-500 text-stone-50 p-2 rounded font-bold hover:bg-indigo-600 cursor-pointer"
            >
              {getLable(selected.text)}
              <i className="fa-solid fa-list icon"></i>
            </button>
          );
        }}
        renderExpand={({close}) => {
          return (
            <>
              {list.map((option, index) => {
                return (
                  <div
                    key={index}
                    className="text-stone-50 font-bold hover:bg-indigo-600 hover:rounded cursor-pointer p-2"
                    onClick={() => {
                      console.log(option.text);
                      setState(option.text);
                      close();
                    }}
                  >
                    {isSelected(option.text) && <i className="fa-solid fa-check icon"></i>}
                    <span>{option.text}</span>
                  </div>
                );
              })}
            </>
          );
        }}
        expandWidth={300}
        top={"44px"}
        bottom={""}
        left={"1%"}
        right={""}
        toggleWidth={300}
      />
    </div>
  );
}