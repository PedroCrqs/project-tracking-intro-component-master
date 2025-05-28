const menu = document.querySelector(".header-menu");
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");

const openMenu = () => {
  menu.classList.toggle("hidden-menu");
  openButton.classList.toggle("responsive-button");
  closeButton.classList.toggle("hidden-button");
};

const closeMenu = () => {
  menu.classList.toggle("hidden-menu");
  openButton.classList.toggle("responsive-button");
  closeButton.classList.toggle("hidden-button");
};
