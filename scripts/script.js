"use strict";
const allSections = document.querySelectorAll(".section"); //Elements selection
const nav = document.querySelector("nav");
const subscribeBtn = document.querySelector(".Subscribe");
const sent = document.querySelector(".sent");


AOS.init();
var lastScrollTop = 0;

document.addEventListener("scroll", () => {
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
  },false);
//Credits: https://stackoverflow.com/questions/31223341/detecting-scroll-direction

subscribeBtn.addEventListener("click", () => { //Button handler
  sent.classList.remove("hidden");
});

const revealSection = (entries, observer) => {
  const [entry] = entries; // desctructuring the entry object
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden"); // remove the hidden class of the CURRENT section, when the section is in the view
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null, // the entire viewport
  threshold: 0.15, // when the element is 15% visible it reveals
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
