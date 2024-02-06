"use strict";
// 프론트 1 2 5 8
//  백 3 6
//  모바일 4 7

const categories = document.querySelector(".categories");
const projects = document.querySelectorAll(".project");
const projectsContainer = document.querySelector(".projects");

categories.addEventListener("click", (e) => {
  const filter = e.target.dataset.category;
  console.log(filter);
  if (filter == null) {
    return;
  }
  handleActiveSelection(e.target);
  filterProjects(filter);
  projectsContainer.classList.add("anim-out");
  setTimeout(() => {
    projectsContainer.classList.remove("anim-out");
  }, 250);
});

function handleActiveSelection(target) {
  const active = document.querySelector(".category--selected");
  active.classList.remove("category--selected");
  target.classList.add("category--selected");
}

function filterProjects(filter) {
  projects.forEach((pj) => {
    console.log(pj.dataset.type);
    if (filter === "all" || filter === pj.dataset.type) {
      pj.classList.remove("hidden");
    } else {
      pj.classList.add("hidden");
    }
  });
}
