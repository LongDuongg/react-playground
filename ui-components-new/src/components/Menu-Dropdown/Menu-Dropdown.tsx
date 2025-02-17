import Dropdown, { RenderToggle, RenderExpand } from "../dropdown/dropdown";

type Props = {
  title: string;
  options: {
    iconClass: string;
    text: any;
  }[];
};

// const MenuDropdown:FC<Props> = ({ title, options }) => {
export default function MenuDropdown({ title, options }: Props) {
  const renderToggle: RenderToggle = ({ showExpand, isOpen }) => {
    return (
      <button
        onClick={() => {
          showExpand(!isOpen);
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
    );
  };

  return (
    <Dropdown
      className="w-full relative"
      renderToggle={renderToggle}
      renderExpand={({ close }) => {
        return (
          <>
            {options.map((option, index) => {
              return (
                <div
                  key={index}
                  className="text-stone-50 font-bold hover:bg-indigo-600 hover:rounded cursor-pointer p-2"
                  onClick={() => {
                    console.log(option.text);
                    close();
                  }}
                >
                  <i
                    className={`fa-solid ${option.iconClass} text-indigo-500 mr-3`}
                  ></i>
                  <span>{option.text}</span>
                </div>
              );
            })}
          </>
        );
      }}
      expandWidth={300}
      top={"44px"}
      bottom={""} 
      left={""} 
      right={0} 
      toggleWidth={"100%"}    
    />
  );
}

// export default MenuDropdown;
