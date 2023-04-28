// import Counter from "../components/counter";
// import { MoreMenu } from "../components/menu-dropdown/more-menu";
// import { OptionsMenu } from "../components/menu-dropdown/options-menu";
// import ProfileMenu from "../components/menu-dropdown/profile-menu";
// import { TestCombobox } from "./test-combobox";
// import TestListbox from "./test-listbox";
// import { TestSwitch } from "./test-switch";
// import { TestDisclosure } from "./test-disclosure";
// import { TestModal } from "./test-modal";
import { TestPopover, TestPopover2 } from "./test-popover";
import { ComputerRadio } from "../components/radio/computer-radio";
import "./samples.scss";

export default function Samples() {
  return (
    <div className="samples-90f">
      {/* <div className="line menu-dropdown">
        <ProfileMenu />
        <OptionsMenu />
        <MoreMenu />
      </div> */}

      {/* <div className="line listbox">
        <TestListbox />
      </div> */}

      {/* <div className="line combobox">
        <TestCombobox />
      </div> */}

      {/* <div className="line switch-toggle">
        <TestSwitch />
      </div> */}

      {/* <div className="line disclosure">
        <TestDisclosure />
      </div> */}

      {/* <div className="line popover">
        <TestPopover />
        <TestPopover2 />
      </div> */}

      {/* <div className="line modal">
        <TestModal />
      </div> */}

      <div className="line radio">
        <ComputerRadio />
      </div>
    </div>
  );
}
