import { useEffect } from "react";

export const useClickOutside = ({ ref, handler }) => {
  useEffect(() => {
    const listener = (e) => {
      if (!ref?.current?.contains(e.target)) {
        handler();
        console.log(e);
      }
    };

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
