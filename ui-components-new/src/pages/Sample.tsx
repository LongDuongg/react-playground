import "./Sample.css";
import MenuDropdown from "../components/Menu-Dropdown/Menu-Dropdown";
import {options} from "../mockdata/mockdata";
export default function Sample() {


  return (
    <div className="flex justify-center items-center min-h-screen">
      <MenuDropdown title="Options" options={options}/>
    </div>
  );
}