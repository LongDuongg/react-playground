import "./Menu-Dropdown.css";
import { useState, useRef } from "react";
import {useClickOutside} from "../../hook/useClickOutside";
import {MenuDropDownProps} from "../../entities/Menudropdown.entity";

export default function MenuDropdown({ title, options }: MenuDropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside({
    ref,
    handler: () => setIsOpen(false),
  });

  return (
    <div ref={ref} className="menu-dropdown">
      <button onClick={() => {setIsOpen(!isOpen)}} className="bg-indigo-500 text-stone-50 pt-[.5rem] pb-[.5rem] pl-[1rem] pr-[1rem] rounded-[.5rem] text-[20px] font-bold hover:bg-indigo-600 cursor-pointer relative left-[59%]">
        {title}
        {isOpen ? (
          <i className="fa-solid fa-angle-up ml-[0.7rem]"></i>
        ) : (
          <i className="fa-solid fa-angle-down ml-[0.7rem]"></i>
        )} 
      </button>
      {isOpen && (
        <div className="bg-blue-400 pt-[.5rem] pb-[.5rem] pl-[1rem] pr-[1rem] rounded-[.5rem] mt-[.5rem] absolute right-[39%]">
          {options.map((option, index) => {
            return (
              <div key={index} className="text-stone-50 text-[20px] font-bold mt-[.5rem] mb-[.5rem] hover:bg-indigo-600 hover:rounded-[.5rem] cursor-pointer pr-[10rem] pl-[1rem] pt-[.5rem] pb-[.5rem]">
                <i className={`fa-solid ${option.iconClass} text-indigo-500 mr-[0.7rem]`}></i>
                <span>{option.text}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}