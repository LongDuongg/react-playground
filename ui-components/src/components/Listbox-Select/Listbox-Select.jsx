import React, { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import "./Listbox-Select.scss";

export const ListboxSelect = () => {
  const [show, setShow] = useState();
  const [check, setCheck] = useState();
  const [value, setValue] = useState(people[0].name);
  const listboxRef = useRef();

  useClickOutside({ ref: listboxRef, handler: () => setShow(false) });

  return (
    <div ref={listboxRef} className="listbox-select-asd">
      <div className="toggle">
        <button
          onClick={() => {
            setShow(!show);
          }}
          className="options-btn"
        >
          {value}
          <i className="fa-solid fa-list icon"></i>
        </button>
      </div>

      {show && (
        <div className="expand">
          <div className="options-value">
            {people.map((person) => {
              return (
                <div
                  key={person.id}
                  className="option"
                  onClick={() => {
                    setShow(!show);
                    setValue(person.name);
                  }}
                >
                  <i className="fa-solid fa-check check-icon"></i>
                  {person.name}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

//

const people = [
  { id: 1, name: "Wade Cooper", selected: false },
  { id: 2, name: "Kenton Towne", selected: false },
  { id: 3, name: "Therese Wunsch", selected: false },
  { id: 4, name: "Benedict Kessler", selected: false },
  { id: 5, name: "Katelyn Rohan", selected: false },
  { id: 6, name: "Durward Reynolds", selected: true },
];
