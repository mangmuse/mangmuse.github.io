const header = document.querySelector(".header");

document.addEventListener("scroll", setHeaderColor);

function setHeaderColor(e) {
  const headerHeight = header.getBoundingClientRect().height;
  const currentscroll = window.scrollY;
  if (headerHeight < currentscroll) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
}
