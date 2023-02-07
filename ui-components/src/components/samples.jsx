import { options, profile, more } from "../api/sample-data";
import { MenuDropdown } from "./menu-dropdown/menu-dropdown";
import "./samples.scss";

export default function Samples() {
  return (
    <div className="samples-90f">
      <div className="test-menu-dropdown">
        <MenuDropdown
         options={profile}
         />
        <MenuDropdown
         options={more}
        />
        <MenuDropdown
         options={options}
        />
      </div>
      {/* <div className="">abc</div> */}
    </div>
  );
}
