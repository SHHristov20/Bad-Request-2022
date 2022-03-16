"use strict";
const allSections = document.querySelectorAll(".section");

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

const galleryImages = document.querySelectorAll(".gallery-images");
const btnBefore = document.querySelector(".btn-before");
const srebarnaText = document.querySelector(".srebarna-text");
const rilaText = document.querySelector(".rila-text");
const madaraText = document.querySelector(".madara-text");
const prohodnaText = document.querySelector(".prohodna-text");
console.log(galleryImages);
console.log(btnBefore);

let currentImage = 0;
btnBefore.addEventListener("click", () => {
  console.log(currentImage);
  [...galleryImages].forEach((image) => {
    image.classList.remove("slide-left");
    image.classList.remove("slide-left1");
  });

  if (currentImage === 0) {
    galleryImages[currentImage].classList.add("slide-left");
    srebarnaText.classList.add("slide-text");
    galleryImages[currentImage + 1].classList.add("slide-left1");
    rilaText.classList.add("slide-text1");
    galleryImages[currentImage + 2].classList.add("slide-left1");
    madaraText.classList.add("slide-text2");
    galleryImages[currentImage + 3].classList.add("slide-left1");
    prohodnaText.classList.add("slide-text3");
  }
  if (currentImage === 1) {
    galleryImages[currentImage].classList.add("slide-left2");
    rilaText.classList.add("slide-text4");
    galleryImages[currentImage + 1].classList.add("slide-left2");
    madaraText.classList.add("slide-text5");
    galleryImages[currentImage + 2].classList.add("slide-left2");
    prohodnaText.classList.add("slide-text6");
    galleryImages[0].classList.add("slide-left");
    srebarnaText.classList.add("hidden");
  }
  if (currentImage === 2) {
    galleryImages[currentImage].classList.add("slide-left3");
    madaraText.classList.add("slide-text7");
    galleryImages[currentImage + 1].classList.add("slide-left3");
    prohodnaText.classList.add("slide-text8");
    galleryImages[0].classList.add("slide-left");
  }
  if (currentImage === 3) {
    galleryImages[currentImage].classList.add("slide-left4");
    prohodnaText.classList.add("slide-text9");
    galleryImages[0].classList.add("slide-left");
    srebarnaText.classList.add("slide-left");
  }
  currentImage++;
});
