export const options = [
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

export const list = [
  {
    text: "Wade Cooper",
  },
  {
    text: "Ariene Mccoy",
  },
  {
    text: "Devon Webb",
  },
  {
    text: "Tom Cook",
  },
  {
    text: "Tanya Fox",
  },
  {
    text: "Hellen Schmidt",
  },
].map(({ text }) => ({ text, value: text }));

export const solutions = [
  {
    title: "Insight",
    text: "Measure actions your users tak",
    iconclass: "fa-sharp fa-solid fa-eye",
  },
  {
    title: "Automations",
    text: "Create your own targeted automations",
    iconclass: "fa-solid fa-robot",
  },
  {
    title: "Reports",
    text: "Keep track of your growth",
    iconclass: "fa-solid fa-bug",
  },
];

export const plans = [
  {
    name: "Startup",
    ram: "12GB",
    cpus: "6 CPUs",
    disk: "160 GB SSD disk",
  },
  {
    name: "Business",
    ram: "16GB",
    cpus: "8 CPUs",
    disk: "512 GB SSD disk",
  },
  {
    name: "Enterprise",
    ram: "32GB",
    cpus: "12 CPUs",
    disk: "1024 GB SSD disk",
  },
];
