import Dropdown from "../dropdown/dropdown";

type Item = {
  text: string;
  value: string;
};

type isSelected = (item: Item) => boolean;

type getLabel = (item: Item) => string;

type Props = {
  list: Item[];
  isSelected: isSelected;
  getLabel: getLabel;
  onChange: (item: Item) => void;
};

export default function Listbox({
  list,
  isSelected,
  getLabel,
  onChange,
}: Props) {
  const selected = list.find((item) => isSelected(item));

  return (
    <Dropdown
      renderToggle={({ showExpand, isOpen }) => {
        return (
          <button
            onClick={() => {
              showExpand(!isOpen);
            }}
            className="w-full bg-indigo-500 text-stone-50 p-2 rounded font-bold hover:bg-indigo-600 cursor-pointer text-left pl-5"
          >
            {selected ? getLabel(selected) : ""}
            <i className="fa-solid fa-list relative left-40"></i>
          </button>
        );
      }}
      renderExpand={({ close }) => {
        return (
          <>
            {list.map((item, index) => {
              return (
                <div
                  key={index}
                  className="text-stone-50 font-bold hover:bg-indigo-600 hover:rounded cursor-pointer p-2 relative"
                  onClick={() => {
                    onChange(item);
                    close();
                  }}
                >
                  {isSelected(item) && (
                    <i className="fa-solid fa-check absolute left-2.5 top-3"></i>
                  )}
                  <span className="pl-7">{item.text}</span>
                </div>
              );
            })}
          </>
        );
      }}
      expandDistance={5}
      expandWidth={300}
    />
  );
}
