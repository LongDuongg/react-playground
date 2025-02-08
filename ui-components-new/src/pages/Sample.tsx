import "./Sample.css";
import MenuDropdown from "../components/menu-dropdown/menu-dropdown";
import { options } from "../mockdata/mockdata";

export default function Sample() {
  return (
    <div className="">
      <div className="w-[150px] ml-auto mr-auto">
        <MenuDropdown title="Options" options={options} />
      </div>
    </div>
  );
}
