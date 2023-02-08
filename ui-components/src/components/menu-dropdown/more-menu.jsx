import React from 'react'
import { MenuDropdown } from './menu-dropdown';

export const MoreMenu = () => {
  return <MenuDropdown title="More" options={more}/>
}


const more =[
    {
        iconClass: "fa-solid fa-link",
        text: "Get account link",
    },
    {
        iconClass: "fa-solid fa-palette",
        text: "Change color",
    },
    {
        iconClass: "fa-solid fa-pen-to-square",
        text: "Edit profile",
    },
    {
        iconClass: "fa-solid fa-repeat",
        text: "Switch account",
    },
    {
        iconClass: "fa-solid fa-keyboard",
        text: "Keyboard shortcuts",
    },
];