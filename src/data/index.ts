export const navItems = [
  {
    label: "Home",
    icon: "bxr bx-home-alt-2",
    activeIcon: "bxr bx-folder-open",
    inactiveIcon: "bxr bx-folder",
  },
  {
    label: "iPhone",
    icon: "bxr bx-mobile-alt",
    activeIcon: "bxr bx-folder-open",
    inactiveIcon: "bxr bx-folder",
  },
  {
    label: "MacBook",
    icon: "bxr bx-laptop",
    activeIcon: "bxr bx-folder-open",
    inactiveIcon: "bxr bx-folder",
  },
  {
    label: "Watch",
    icon: "bxr bx-wrist-watch",
    activeIcon: "bxr bx-folder-open",
    inactiveIcon: "bxr bx-folder",
  },
  {
    label: "iMac",
    icon: "bxr bx-desktop",
    activeIcon: "bxr bx-folder-open",
    inactiveIcon: "bxr bx-folder",
  },
];

export const homePageItems = [
  { label: "iPhone", img: "items/iphone.jpg", pageIndex: 1 },
  { label: "MacBook", img: "items/macbook.jpg", pageIndex: 2 },
  { label: "Smart Watch", img: "items/watch.jpg", pageIndex: 3 },
  { label: "iMac", img: "items/imac.png", pageIndex: 4 },
];

export const iphoneModels = [
  {
    name: "iPhone 16 Pro Max",
    description: "The ultimate iPhone.",
    price: "From $1,099",
    img: "iphone/iphone16-pro-max.png",
  },
  {
    name: "iPhone 16 Plus",
    description: "A total powerhouse.",
    price: "From $799",
    img: "iphone/iphone16-plus.png",
  },
  {
    name: "iPhone 16",
    description: "As amazing as ever.",
    price: "From $799",
    img: "iphone/iphone16.png",
  },
];

export const macbookModels = [
  {
    chip: "M2",
    price: "From $999",
    img: "macbook/macbook-air-gold-m2.jpg",
    colors: [
      { label: "Space gray", bg: "#b2b5b8", img: "macbook/macbook-air-spacegray-m2.jpg" },
      { label: "Gold", bg: "#f0e0d3", img: "macbook/macbook-air-gold-m2.jpg" },
      { label: "Silver", bg: "#e0e2e1", img: "macbook/macbook-air-silver-m2.jpg" },
    ],
    specs: ["8-Core CPU", "8-Core GPU", "16GB Unified Memory", "256GB SSD Storage"],
    icon: "macbook/apple-m2-icon.png",
  },
  {
    chip: "M3",
    price: "From $1,299",
    img: "macbook/macbook-air-spacegray-m3.jpg",
    colors: [
      { label: "Midnight", bg: "#2e3641", img: "macbook/macbook-air-midnight-m3.jpg" },
      { label: "Starlight", bg: "#f0e5d3", img: "macbook/macbook-air-starlight-m3.jpg" },
      { label: "Space gray", bg: "#7d7e80", img: "macbook/macbook-air-spacegray-m3.jpg" },
      { label: "Silver", bg: "#e3e4e6", img: "macbook/macbook-air-silver-m3.jpg" },
    ],
    specs: ["8-Core CPU", "10-Core GPU", "24GB Unified Memory", "512GB SSD Storage"],
    icon: "macbook/apple-m3-icon.png",
  },
];

export const watchModels = [
  {
    imgs: ["watch/watch10-side.png", "watch/watch10.png"],
    name: "Apple Watch Series 10",
    price: "From $399",
    desc: ["45mm or 41mm case size", "50m water resistant", "Swimproof"],
  },
  {
    imgs: ["watch/watch-hermes-side.png", "watch/watch-hermes.png"],
    name: "Apple Watch Hermes",
    price: "From $1,149",
    desc: ["44mm or 40mm case size", "50m water resistant", "Swimproof"],
  },
  {
    imgs: ["watch/watch-se-side.png", "watch/watche-se.png"],
    name: "Apple Watch Se",
    price: "From $249",
    desc: ["44mm case size", "10m water resistant", "Swimproof"],
  },
];
