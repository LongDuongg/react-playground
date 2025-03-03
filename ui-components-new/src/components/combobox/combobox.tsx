import Dropdown from "../dropdown/dropdown";
import { useRef, useState } from "react";
import { bindInput } from "../../common/bindInput";
type Item = {
  text: string;
  value: string;
};

type Props = {
  list: Item[];
  getLabel: (item: Item) => string;
  isSelected: (item: Item) => boolean;
  onChange: (item: Item) => void;
};

export default function Combobox({
  list,
  getLabel,
  isSelected,
  onChange,
}: Props) {
  const [searchText, setSearchText] = useState(null);
  const selected = list.find((item) => isSelected(item)); // hỏi về find
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Dropdown
      renderToggle={({ showExpand, isOpen }) => {
        return (
          <div className="w-full bg-indigo-500 text-stone-50 pt-2 pb-2 rounded font-bold hover:bg-indigo-600 text-left">
            <input
              {...bindInput({
                value: searchText ?? (selected && getLabel(selected)),
                onChange: (e) => {
                  setSearchText(e);
                  if (!isOpen) {
                    showExpand(true);
                  }
                },
              })}
              type="text"
              value={selected ? getLabel(selected) : ""}
              className="w-67 pl-4 outline-0"
              ref={inputRef}
            />
            <div
              className="absolute right-0 top-2 cursor-pointer pr-4 "
              onClick={() => {
                showExpand(!isOpen);
                inputRef.current?.focus();
              }}
            >
              <i className="fa-solid fa-list"></i>
            </div>
          </div>
        );
      }}
      renderExpand={({ close }) => {
        return (
          <>
            {list.map((item, index) => {
              return (
                <div
                  key={index}
                  className="text-stone-50 font-bold hover:bg-indigo-600 hover:rounded cursor-pointer p-2 relative"
                  onClick={() => {
                    close();
                    onChange(item);
                    inputRef.current?.focus();
                  }}
                >
                  {isSelected(item) && (
                    <i className="fa-solid fa-check absolute left-2.5 top-3"></i>
                  )}
                  <span className="pl-7">{item.text}</span>
                </div>
              );
            })}
          </>
        );
      }}
      expandWidth={300}
      expandDistance={10}
    />
  );
}
