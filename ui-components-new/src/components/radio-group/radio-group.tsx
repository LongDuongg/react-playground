import clns from "classnames";

type RadioProps = {
  renderRadio: () => any;
  className?: string;
  index: number;
  activeBG: string;
  inactiveBG: string;
  checked: boolean;
  onSelect: () => void;
};

export const Radio = ({
  renderRadio,
  className,
  activeBG,
  inactiveBG,
  checked,
  index,
  onSelect,
}: RadioProps) => {
  return (
    <div
      style={{
        ...(checked && {
          border: "4px solid #91d9e6",
          borderRadius: "0.6rem",
        }),
        margin: "10px 0px",
      }}
    >
      <div
        key={index}
        className={clns("radio-lag rounded-[0.4rem]", className)}
        onClick={() => {
          onSelect();
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

type RadioGroupProps = {
  list: any[];
  isSelected: (v: any) => boolean;
  onChange: (v: any) => void;
};

export const RadioGroup = ({ list, isSelected, onChange }: RadioGroupProps) => {
  return (
    <>
      {list.map((item, index) => {
        return (
          <Radio
            index={index}
            className={"startup-alm py-3 pl-3"}
            renderRadio={() => {
              return (
                <div className="content relative cursor-pointer">
                  <div className="name">{item.name}</div>
                  <div className="info">{item.info}</div>
                  <div className="icon absolute right-3.5 top-[50%] transform -translate-1/2">
                    {isSelected(item) && (
                      <i className="fa-solid fa-circle-check" />
                    )}
                  </div>
                </div>
              );
            }}
            checked={isSelected(item)}
            activeBG={"#0e658d"}
            inactiveBG={"#91d9e6"}
            onSelect={() => {
              onChange(item);
              console.log(item);
            }}
          />
        );
      })}
    </>
  );
};
