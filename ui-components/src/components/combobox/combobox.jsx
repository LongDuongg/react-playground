import React, { useRef, useState } from "react";
import { bindInput } from "../../common/bindInput";
import Dropdown from "../dropdown/dropdown";
import "./combobox.scss";

export const Combobox = ({
  list,
  getLabel,
  onChange,
  isSelected,
  placeholder = "Choose or search options...",
}) => {
  const selected = list.find((item) => isSelected(item));
  const inputRef = useRef();

  const [searchText, setSearchText] = useState();

  const searchedList = !searchText
    ? list
    : list.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );

  return (
    <Dropdown
      className="combobox-b22"
      renderToggle={({ showExpand, expanding }) => {
        return (
          <div className="combobox-input">
            <input
              {...{
                ...bindInput({
                  // According to the theory, the logical or || operator take the right-hand side operand
                  // when the left-hand side is in the case of falsy value such as : "", 0, NaN,
                  // null, undefined. Whereas, the nullish coalescing ?? operator take the right-hand side operand
                  // only when the left-hand side is null and undefined

                  // in this case the searchText has no initial value, that means you can understand it can be anything
                  // you want it to be. It might be a string, a number, an object, undefined, null. Beside, the value
                  // in the input only receive a string, therefore you can see the searchText as an empty string which
                  // we can have a following simple example : "" || "aaa" = "aaa" , "" ?? "aaa" = "" => that's why we use
                  // ?? not ||
                  value: searchText ?? (selected && getLabel(selected)),
                  onChange: (v) => {
                    setSearchText(v);
                    // if we don't have condition in this case, the showExpand function will be called many times,
                    // that means the expand-part will open, close continuously whenever we press every single word creating
                    // the inconvenience for users. Therefore, we have to add a condition so that the showExpand function will
                    // work only once time

                    // to open the dropdown on typing
                    if (!expanding) {
                      showExpand(true);
                    }
                  },
                }),
                placeholder: placeholder,
                ref: inputRef,
              }}
            />
            {/* the first reason is we can take advantage of height of the input to set the same height of the wrapper
                and cover all area by width without using padding. The second is when we move the computer mouse slowly to the 
                edge of the icon wrapper, it  will become hand cursor right away after touching the edge, just like the input next 
                to it, the mouse becomes caret after touching the edge of input. the third is whenever we click on the wrapper, the
                showExpand function is still called
            */}
            <div
              className="icon-wrapper"
              onClick={() => {
                showExpand(!expanding);
                inputRef.current.focus();
              }}
            >
              <i className="fa-solid fa-list icon"></i>
            </div>
          </div>
        );
      }}
      renderExpand={({ close }) => {
        return (
          <div className="combobox-list">
            {searchedList.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    onChange(item);
                    // The reason why we use setSearchText(null) in this case, because when we type to search, click to choose
                    // the selected item is not shown on input. Like we said about the example above : ("" || "aaa" = "aaa") and ("" ?? "aaa" = "")
                    // we use nullish coalescing ?? operator, that means if we want the selected item to be shown on input, we have to set the searchText
                    // null or undefined after we choose
                    setSearchText(null);
                    close();
                  }}
                  key={index}
                  className="option"
                >
                  {isSelected(item) && <i className="fa-solid fa-check " />}
                  {getLabel(item)}
                </div>
              );
            })}
          </div>
        );
      }}
      // The reason why we have onPassiveClose and setSearchText(null) here because when there is selected item on input, we type to search, then click
      // outside to close dropdown, but the selected item isn't shown again. to solve this issue we add a new function called onPassiveClose to the Dropdown
      // component, particularly in useClickOutside. Whenever we type and click outside, the onPassviveClose function is called to setSearchText(null)
      // to show the selected item on the input
      onPassiveClose={() => setSearchText(null)}
      expandDistance={5}
      expandWidth={305}
    />
  );
};
