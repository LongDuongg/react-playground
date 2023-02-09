import Counter from "./counter";
import { MoreMenu } from "./menu-dropdown/more-menu";
import { OptionsMenu } from "./menu-dropdown/options-menu";
import ProfileMenu from "./menu-dropdown/profile-menu";
import "./samples.scss";

export default function Samples() {
  return (
    <div className="samples-90f">
      <div className="test-menu-dropdown">
        <ProfileMenu />
        <OptionsMenu />
        <MoreMenu />
      </div>
      <Counter />
    </div>
  );
}
