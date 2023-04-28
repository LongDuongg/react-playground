import React from "react";
import { Radio } from "./radio";
import { useState } from "react";
import "./computer-radio.scss";

export const ComputerRadio = () => {
  const [selected, setSelected] = useState();

  // const computerInfo = [
  //   { name: "Startup", info: "12GB/6 CPUs - 160 GB SSD disk" },
  //   { name: "Business", info: "16GB/8 CPUs · 512 GB SSD disk" },
  //   { name: "Enterprise", info: "32GB/12 CPUs · 1024 GB SSD disk" },
  // ];

  // return (
  //   <div className="computer-group-mvb">
  //     <Radio
  //       className={"computer-alm"}
  //       renderRadio={({ option, isSelected }) => {
  //         return (
  //           <div className="content">
  //             <div className="name">{computerInfo[0].name}</div>
  //             <div className="info">{computerInfo[0].info}</div>
  //             <div className="icon">
  //               {isSelected && <i className="fa-solid fa-circle-check" />}
  //             </div>
  //           </div>
  //         );
  //       }}
  //       checked={selected}
  //       onChange={() => setSelected(!selected)}
  //       activeBG={"#0e658d"}
  //       inactiveBG={"#91d9e6"}
  //     />

  //     <Radio
  //       className={"computer-alm"}
  //       renderRadio={({ option, isSelected }) => {
  //         return (
  //           <div className="content">
  //             <div className="name">{computerInfo[1].name}</div>
  //             <div className="info">{computerInfo[1].info}</div>
  //             <div className="icon">
  //               {isSelected && <i className="fa-solid fa-circle-check" />}
  //             </div>
  //           </div>
  //         );
  //       }}
  //       checked={selected}
  //       onChange={() => setSelected(!selected)}
  //       activeBG={"#0e658d"}
  //       inactiveBG={"#91d9e6"}
  //     />

  //     <Radio
  //       className={"computer-alm"}
  //       renderRadio={({ option, isSelected }) => {
  //         return (
  //           <div className="content">
  //             <div className="name">{computerInfo[2].name}</div>
  //             <div className="info">{computerInfo[2].info}</div>
  //             <div className="icon">
  //               {isSelected && <i className="fa-solid fa-circle-check" />}
  //             </div>
  //           </div>
  //         );
  //       }}
  //       checked={selected}
  //       onChange={() => setSelected(!selected)}
  //       activeBG={"#0e658d"}
  //       inactiveBG={"#91d9e6"}
  //     />
  //   </div>
  // );

  return (
    <div className="computer-group-mvb">
      <Radio
        className={"startup-alm"}
        renderRadio={() => {
          return (
            <div className="content">
              <div className="name">Startup</div>
              <div className="info">12GB/6 CPUs - 160 GB SSD disk</div>
              <div className="icon">
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
        className={"business-alm"}
        renderRadio={() => {
          return (
            <div className="content">
              <div className="name">Business</div>
              <div className="info">16GB/8 CPUs · 512 GB SSD disk</div>
              <div className="icon">
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
        className={"enterprise-alm"}
        renderRadio={() => {
          return (
            <div className="content">
              <div className="name">Enterprise</div>
              <div className="info">32GB/12 CPUs · 1024 GB SSD disk</div>
              <div className="icon">
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
  );
};
