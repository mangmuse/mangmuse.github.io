const header = document.querySelector(".header");
const home = document.querySelector(".home__container");
const arrow = document.querySelector(".arrow-up");

document.addEventListener("scroll", setHeaderColor);
document.addEventListener("scroll", setHomeOpacity);
document.addEventListener("scroll", displayArrow);

function setHeaderColor(e) {
  const headerHeight = header.getBoundingClientRect().height;
  const currentScroll = window.scrollY;
  if (headerHeight < currentScroll) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
}
const homeHeight = home.getBoundingClientRect().height;
function setHomeOpacity() {
  const currentScroll = window.scrollY;
  home.style.opacity = 1 - currentScroll / homeHeight;
}

function displayArrow() {
  if (window.scrollY > homeHeight / 2) {
    arrow.classList.remove("hidden");
  } else {
    arrow.classList.add("hidden");
  }
}
