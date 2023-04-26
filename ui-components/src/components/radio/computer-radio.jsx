import React from "react";
import { Radio } from "./radio";
import "./computer-radio.scss";
import { useState } from "react";

export const ComputerRadio = () => {
  const [selected, setSelected] = useState();

  const computerInfo = [
    { name: "Startup", info: "12GB/6 CPUs - 160 GB SSD disk" },
    { name: "Business", info: "16GB/8 CPUs · 512 GB SSD disk" },
    // { name: "Enterprise", info: "32GB/12 CPUs · 1024 GB SSD disk" },
  ];

  return (
    <div className="computer-group-mvb">
      {computerInfo.map((info, index) => {
        return (
          <Radio
            key={index}
            choice={info}
            className={"computer-alm"}
            renderRadio={({ option, isSelected }) => {
              return (
                <div className="content">
                  <div className="name">{option.name}</div>
                  <div className="info">{option.info}</div>
                  <div className="icon">
                    {isSelected && <i className="fa-solid fa-circle-check" />}
                  </div>
                </div>
              );
            }}
            activeBG={"#0e658d"}
            inactiveBG={"#91d9e6"}
          />
        );
      })}
    </div>
  );
};
