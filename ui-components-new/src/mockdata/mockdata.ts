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
].map((item, i) => ({ ...item, id: i }));

export const categories = [
  {
    name: "Recent",
    details: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
  },
  {
    name: "Popular",
    details: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
  },
  {
    name: "Trending",
    details: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
];
