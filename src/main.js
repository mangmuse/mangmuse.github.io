"use strict";

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

// 1. 모바일 버전의 경우 nav가 표시되지않고 햄버거가 나옴
// 2. 햄버거를 누르면 세로로 nav가 표시됨
const toggleBtn = document.querySelector(".header__toggle");
const headerMenu = document.querySelector(".header__menu");
toggleBtn.addEventListener("click", toggleNav);
function toggleNav(e) {
  headerMenu.classList.toggle("open");
}
// 3. nav 버튼을 누르면 해당 페이지로 이동이 되고 nav 창이 닫힘

const main = document.querySelector("main");

headerMenu.addEventListener("click", jump);
function jump(e) {
  toggleNav();
}
