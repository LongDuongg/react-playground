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
    info: "12GB/6 CPUs - 160 GB SSD disk",
  },
  {
    name: "Business",
    info: "16GB/8 CPUs · 512 GB SSD disk",
  },
  {
    name: "Enterprise",
    info: "32GB/12 CPUs · 1024 GB SSD disk",
  },
].map((item) => ({ ...item, value: item.name }));
