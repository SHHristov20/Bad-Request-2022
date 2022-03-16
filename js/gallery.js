const galleryImages = document.querySelectorAll(".gallery-images");
const btnBefore = document.querySelector(".btn-before");
const srebarnaText = document.querySelector(".srebarna-text");
const rilaText = document.querySelector(".rila-text");
const madaraText = document.querySelector(".madara-text");
const prohodnaText = document.querySelector(".prohodna-text");
const image5 = document.querySelector(".img5");
const image6 = document.querySelector(".img6");
const image7 = document.querySelector(".img7");
const image8 = document.querySelector(".img8");
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
    image5.classList.remove("hidden");
    image5.classList.add("slide-left5");
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
    image5.classList.remove("slide-left5");
    image5.classList.add("slide-left6");
    image6.classList.remove("hidden");
    image6.classList.add("slide-left5");
  }
  if (currentImage === 2) {
    galleryImages[currentImage].classList.add("slide-left3");
    madaraText.classList.remove("slide-text2");
    madaraText.classList.remove("slide-text5");
    madaraText.classList.add("slide-text");
    galleryImages[currentImage + 1].classList.add("slide-left3");
    prohodnaText.classList.remove("slide-text3");
    prohodnaText.classList.remove("slide-text6");
    prohodnaText.classList.add("slide-text1");
    galleryImages[0].classList.add("slide-left");
    image5.classList.remove("slide-left6");
    image5.classList.add("slide-left7");
    image6.classList.remove("slide-left5");
    image6.classList.add("slide-left6");
    image7.classList.remove("hidden");
    image7.classList.add("slide-left5");
  }
  if (currentImage === 3) {
    galleryImages[currentImage].classList.add("slide-left4");
    prohodnaText.classList.remove("slide-text1");
    prohodnaText.classList.remove("slide-text3");
    prohodnaText.classList.remove("slide-text6");
    prohodnaText.classList.add("slide-text");
    galleryImages[0].classList.add("slide-left");
    srebarnaText.classList.add("slide-left");
    image5.classList.remove("slide-left7");
    image5.classList.add("slide-left8");
    image6.classList.remove("slide-left6");
    image6.classList.add("slide-left7");
    image7.classList.remove("slide-left5");
    image7.classList.add("slide-left6");
    image8.classList.remove("hidden");
    image8.classList.add("slide-left5");
  }
  currentImage++;
});
