import Counter from "../components/counter";
import { MoreMenu } from "../components/menu-dropdown/more-menu";
import { OptionsMenu } from "../components/menu-dropdown/options-menu";
import ProfileMenu from "../components/menu-dropdown/profile-menu";
import "./samples.scss";
import { TestCombobox } from "./test-combobox";
import TestListbox from "./test-listbox";

export default function Samples() {
  return (
    <div className="samples-90f">
      {/* <div className="line menu-dropdown">
        <ProfileMenu />
        <OptionsMenu />
        <MoreMenu />
      </div> */}
      <div className="line listbox">
        {/* <TestListbox /> */}
        <TestCombobox />
      </div>
    </div>
  );
}
