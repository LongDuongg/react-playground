import { useState, useRef } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

export default function Counter() {
  const [count, setCount] = useState(0);

  const ref = useRef();

  // useEffect(() => {
  // const handleClickOutside = (e) => {
  //   if (!ref.current.contains(e.target)) {
  //     setCount(count - 1);
  //     // console.log(`Count : ${count}`);
  //   }
  // };

  // document.addEventListener("mousedown", handleClickOutside);

  // return () => {
  //   document.removeEventListener("mousedown", handleClickOutside);
  // };

  // }, [count]);

  useClickOutside({ ref, handler: () => setCount(count - 1) });

  return (
    <div
      className=""
      ref={ref}
      style={{ width: 100, height: 100, border: "1px solid red" }}
      onClick={() => setCount(count + 1)}
    >
      {count}
    </div>
  );
}
