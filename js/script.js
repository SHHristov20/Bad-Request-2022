"use strict";
const allSections = document.querySelectorAll(".section");
const nav = document.querySelector("nav");
console.log(nav);
var lastScrollTop = 0;

document.addEventListener(
  "scroll",
  function () {
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if (st > lastScrollTop) {
      nav.classList.remove("down");
      console.log("down");
      nav.classList.add("up");
    } else {
      nav.classList.remove("up");
      console.log("up");
      nav.classList.add("down");
    }
    lastScrollTop = st <= 0 ? 0 : st; 
  },
  false
);
//Credits: https://stackoverflow.com/questions/31223341/detecting-scroll-direction



allSections.forEach((section) => {
  section.classList.remove("section--hidden");
});
const revealSection = (entries, observer) => {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
