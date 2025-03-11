import { useRef } from "react";
import clns from "classnames";

// import { useClickOutside } from "../../hooks/useClickOutside";

type Props = {
  renderRadio: () => any;
  className?: string;
  activeBG: string;
  inactiveBG: string;
  checked: boolean;
  onChange: () => void;
};

export const Radio = ({
  renderRadio,
  className,
  activeBG,
  inactiveBG,
  checked,
  onChange,
}: Props) => {
  // const ref = useRef();

  // useClickOutside({
  //   ref: ref,
  //   handler: () => setChecked(false),
  // });

  return (
    <div
      // ref={ref}
      style={{
        ...(checked && {
          border: "4px solid #91d9e6",
          borderRadius: "0.6rem",
        }),
        margin: "10px 0px",
      }}
    >
      <div
        className={clns("radio-lag rounded-[0.4rem]", className)}
        onClick={() => {
          // if (ref.current.contains(e.target)) {
          //   setChecked(true);
          // }
          // console.log(e);
          onChange();
        }}
        style={{
          backgroundColor: checked ? `${activeBG}` : `${inactiveBG}`,
        }}
      >
        {renderRadio()}
      </div>
    </div>
  );
};

export const RadioGroup = ({ list }: { list: any[] }) => {
  // list map Radio
};
