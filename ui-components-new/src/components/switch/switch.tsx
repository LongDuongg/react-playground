type Props = {
  checked: boolean;
  onChange: () => void;
  activeBackgroundColor?: string;
  inactiveBackgroundColor?: string;
};

export function Switch({
  checked,
  onChange,
  activeBackgroundColor = "#0e0b5e",
  inactiveBackgroundColor = "#3734a0",
}: Props) {
  return (
    <div className="container mt-20 w-30 h-12 ">
      <div
        className="switch-btn h-full cursor-pointer relative rounded-full"
        style={{
          background: checked ? activeBackgroundColor : inactiveBackgroundColor,
        }}
        onClick={() => {
          onChange();
        }}
      >
        <i
          className={`fa-sharp-duotone fa-solid fa-circle absolute text-4xl shadow-md top-[50%] transform -translate-y-1/2 text-amber-50 transition-all duration-600 ease-in-out ${
            checked
              ? "left-[calc(100%-8px)] transform -translate-x-full"
              : "left-2"
          }`}
        ></i>
      </div>
    </div>
  );
}

// "left-2": !checked,
// "right-2": checked,
