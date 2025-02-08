import { useState, useRef, FC } from "react";
import { useClickOutside } from "../../hook/useClickOutside";

type Props = {
  title: string;
  options: {
    iconClass: string;
    text: any;
  }[];
};

// const MenuDropdown:FC<Props> = ({ title, options }) => {
export default function MenuDropdown({ title, options }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside({
    ref,
    handler: () => setIsOpen(false),
  });

  const expandWidth = 300;

  return (
    <div ref={ref} className="menu-dropdown w-full relative">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="w-full bg-indigo-500 text-stone-50 p-2 rounded font-bold hover:bg-indigo-600 cursor-pointer"
      >
        {title}
        {isOpen ? (
          <i className="fa-solid fa-angle-up ml-3"></i>
        ) : (
          <i className="fa-solid fa-angle-down ml-3"></i>
        )}
      </button>
      {isOpen && (
        <div
          style={{ width: expandWidth }}
          className="bg-blue-400 rounded p-2 absolute right-0 top-[50px]"
        >
          {options.map((option, index) => {
            return (
              <div
                key={index}
                className="text-stone-50 font-bold hover:bg-indigo-600 hover:rounded-[.5rem] cursor-pointer p-2"
              >
                <i
                  className={`fa-solid ${option.iconClass} text-indigo-500 mr-[0.7rem]`}
                ></i>
                <span>{option.text}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// export default MenuDropdown;
