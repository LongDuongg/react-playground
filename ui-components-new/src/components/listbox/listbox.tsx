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
      className="w-full relative"
      renderToggle={({ showExpand, isOpen }) => {
        return (
          <button
            onClick={() => {
              showExpand(!isOpen);
            }}
            className="w-full bg-indigo-500 text-stone-50 p-2 rounded font-bold hover:bg-indigo-600 cursor-pointer"
          >
            {selected ? getLabel(selected) : ""}
            <i className="fa-solid fa-list icon"></i>
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
                  className="text-stone-50 font-bold hover:bg-indigo-600 hover:rounded cursor-pointer p-2"
                  onClick={() => {
                    onChange(item);
                    close();
                  }}
                >
                  {isSelected(item) && (
                    <i className="fa-solid fa-check icon"></i>
                  )}
                  <span>{item.text}</span>
                </div>
              );
            })}
          </>
        );
      }}
      expandDistance={5}
      expandWidth={300}
      position={{ left: 0 }}
    />
  );
}
