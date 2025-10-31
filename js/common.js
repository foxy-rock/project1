const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu-mobile");
const closeMenu = document.querySelector(".close__menu");

burger.addEventListener("click", () => {
  menu.classList.add("open");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("open");
});

window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const currentPath = window.location.pathname;

document.querySelectorAll("nav ul li a").forEach((link) => {
  const linkHref = link.getAttribute("href");

  if (linkHref === currentPath.substring(currentPath.lastIndexOf("/") + 1) || (currentPath === "/" && linkHref === "index.html")) {
    link.classList.add("active");
    link.parentElement.classList.add("active"); // выделение всего <li>, если нужно
  }
});
