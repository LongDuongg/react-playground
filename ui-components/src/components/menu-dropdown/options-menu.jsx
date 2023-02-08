import React from 'react'
import { MenuDropdown } from './menu-dropdown';

export const OptionsMenu = () => {
  return <MenuDropdown title="Options" options={options}/>
}

const options = [
    {
        iconClass: "fa-regular fa-pen-to-square",
        text: "Edit",
    },
    {
        iconClass: "fa-regular fa-clone",
        text: "Duplicate",
    },
    {
        iconClass: "fa-regular fa-box-archive",
        text: "Archive",
    },
    {
        iconClass: "fa-regular fa-arrow-up-right-from-square",
        text: "Move",
    },
    {
        iconClass: "fa-regular fa-trash",
        text: "Delete",
    },
];
