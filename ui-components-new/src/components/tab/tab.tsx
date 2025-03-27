import clns from "classnames";
// type Props = {
//   list: any[];
//   contentDistance: number;
//   isActive: (v: any) => boolean;
//   onChange: (v: any) => void;
// };

// TODO refactor to TabHeader and TabPanel
// export function Tab({ list, contentDistance, isActive, onChange }: Props) {
//   const [state, seState] = useState<any>();
//   const [selected, seSelected] = useState(false);
//   useEffect(() => {
//     // isActive(list[0].id);
//     onChange(list[0]);
//     if (list.length > 0) {
//       seState({ ...list[0] });
//     }
//   }, [list]);
//   return (
//     <div className="tab mt-9 relative p-2 bg-[#51A7BF] flex space-x-4 rounded-[10px]">
//       {list.map((item, index) => {
//         // TODO add hover state
//         return (
//           <button
//             key={index}
//             onClick={() => {
//               onChange(item);
//               seState({ ...item });
//             }}
//             style={{
//               backgroundColor: isActive(item) ? "#fff" : "#51A7BF",
//               color: isActive(item) ? "#51A7BF" : "#fff",
//             }}
//             className="tab-name text-[20px] py-2 px-14  cursor-pointer rounded-[10px]"
//           >
//             {item.name}
//           </button>
//         );
//       })}
//       <div
//         style={{
//           top: `calc(100% + ${contentDistance}px)`,
//         }}
//         className="expand absolute left-0 right-0 bg-[#51A7BF] rounded-[10px] px-4 py-2"
//       >
//         {state?.details.map((detail: any, index: number) => {
//           // TODO add item hover state
//           return (
//             <div
//               key={index}
//               style={{
//                 border: `4px solid ${selected ? "#91d9e6" : "#51A7BF"}`,
//                 borderRadius: "0.6rem",
//                 margin: "10px 0px",
//               }}
//               onClick={() => {
//                 seSelected(!selected);
//               }}
//               className="content p-3 cursor-pointer"
//             >
//               <div className="title text-[20px] text-amber-50">
//                 {detail.title}
//               </div>
//               <div className="detail">
//                 {detail.date} - {detail.commentCount} comments -{" "}
//                 {detail.shareCount} shares
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

type TabHeaderProps = {
  tabs: any[];
  className?: string;
  isActive: (v: any) => boolean;
  onChange: (v: any) => void;
};

export const TabHeader = ({
  tabs,
  isActive,
  onChange,
  className,
}: TabHeaderProps) => {
  return (
    <div className={clns("tab", className)}>
      {tabs.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              onChange(item);
            }}
            style={
              {
                // backgroundColor: isActive(item) ? "#fff" : "#51A7BF",
                // color: isActive(item) ? "#51A7BF" : "#fff",
              }
            }
            className={`tab-name text-[20px] py-2 px-14 cursor-pointer bg-[${
              isActive(item) ? "#fff" : "#51A7BF"
            }] text-[${
              isActive(item) ? "#51A7BF" : "#fff"
            }] rounded-[10px] hover:bg-[#3E8E9E]`}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

type TabPanelProps = {
  children: any;
  className?: string;
};

export const TabPanel = ({ children, className }: TabPanelProps) => {
  return <div className={clns("expand", className)}>{children}</div>;
};
