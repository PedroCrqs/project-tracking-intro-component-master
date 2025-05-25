const menu = document.querySelector(".menu");
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");

function openMenu() {
  menu.classList.toggle("hidden-menu");
  openButton.classList.toggle("responsive-button");
  closeButton.classList.toggle("hidden-button");
}

function closeMenu() {
  menu.classList.toggle("hidden-menu");
  openButton.classList.toggle("responsive-button");
  closeButton.classList.toggle("hidden-button");
}
