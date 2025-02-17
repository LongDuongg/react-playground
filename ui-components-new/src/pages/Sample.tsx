import "./Sample.css";
// import MenuDropdown from "../components/menu-dropdown/menu-dropdown";
import Listbox from "../components/listbox/listbox";
import { options, list } from "../mockdata/mockdata";


export default function Sample() {
  return (
    <div className="">
      <div className="w-[150px] ml-auto mr-auto">
        {/* <MenuDropdown title="Options" options={options} /> */}
        <Listbox list={list} />
      </div>
    </div>
  );
}
