import { MenuDropdown } from "./menu-dropdown";

export default function ProfileMenu() {
  return <MenuDropdown title="Profile" options={options} />;
}

const options = [
  {
    iconClass: "fa-sharp fa-solid fa-comment",
    text: "Give feedback",
  },
  {
    iconClass: "fa-solid fa-circle-question",
    text: "Help & support",
  },
  {
    iconClass: "fa-solid fa-moon",
    text: "Display & accessibility",
  },
  {
    iconClass: "fa-solid fa-gear",
    text: "Setting & privacy",
  },
  {
    iconClass: "fa-solid fa-right-from-bracket",
    text: "Sign out",
  },
];
