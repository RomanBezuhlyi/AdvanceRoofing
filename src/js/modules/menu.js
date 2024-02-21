const openMenu = document.querySelector(".header__burger");
const closeMenu = document.querySelector(".header__nav-close");
const menu = document.querySelector(".header__nav");
const body = document.querySelector("body");

openMenu.addEventListener("click", () => {
  menu.classList.add("open");
  body.classList.add("no-scroll");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("open");
  body.classList.remove("no-scroll");
});
