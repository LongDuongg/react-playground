import { options, profile, more } from "../api/sample-data";
import { MenuDropdown } from "./menu-dropdown/menu-dropdown";
import ProfileMenu from "./menu-dropdown/profile-menu";
import "./samples.scss";

export default function Samples() {
  return (
    <div className="samples-90f">
      <div className="test-menu-dropdown">
        <ProfileMenu />
        {/* <MenuDropdown
         options={more}
        />
        <MenuDropdown
         options={options}
        /> */}
      </div>
      {/* <div className="">abc</div> */}
    </div>
  );
}
