const galleryImages = document.querySelectorAll(".gallery-images");
const btnBefore = document.querySelector(".btn-before");
const srebarnaText = document.querySelector(".srebarna-text");
const rilaText = document.querySelector(".rila-text");
const madaraText = document.querySelector(".madara-text");
const prohodnaText = document.querySelector(".prohodna-text");
const lakesText = document.querySelector(".lakes-text");
const belintashText = document.querySelector(".belintash-text");
const throatText = document.querySelector(".throat-text");
const bridgesText = document.querySelector(".bridges-text");
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

  if (currentImage === 8) {
    currentImage = 0;
    [...galleryImages].forEach((image) => {
      image.classList.remove("slide-left2");
      image.classList.remove("slide-left16");
      image.classList.remove("slide-left17");
      image.classList.remove("slide-left18");
      image.classList.remove("slide-left19");
    });
    srebarnaText.classList.remove("slide-text1");
    rilaText.classList.remove("slide-text2");
    madaraText.classList.remove("slide-text3");
    prohodnaText.classList.remove("slide-text7");
    lakesText.classList.remove("slide-text11");
    belintashText.classList.remove("slide-text11");
    throatText.classList.remove("slide-text11");
    bridgesText.classList.remove("slide-text11");
    image5.classList.remove("slide-left9");
    image6.classList.remove("slide-left9");
    image7.classList.remove("slide-left9");
    image8.classList.remove("slide-left9");
    lakesText.classList.add("hidden");
    belintashText.classList.add("hidden");
    throatText.classList.add("hidden");
    bridgesText.classList.add("hidden");
    image5.classList.add("hidden");
    image6.classList.add("hidden");
    image7.classList.add("hidden");
    image8.classList.add("hidden");
  }

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
    lakesText.classList.remove("hidden");
    lakesText.classList.add("slide-text7");
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
    lakesText.classList.remove("slide-text7");
    lakesText.classList.add("slide-text8");
    belintashText.classList.remove("hidden");
    belintashText.classList.add("slide-text7");
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
    lakesText.classList.remove("slide-text8");
    lakesText.classList.add("slide-text9");
    belintashText.classList.remove("slide-text7");
    belintashText.classList.add("slide-text8");
    throatText.classList.remove("hidden");
    throatText.classList.add("slide-text7");
  }
  if (currentImage === 3) {
    galleryImages[currentImage].classList.remove("slide-left2");
    galleryImages[currentImage].classList.remove("slide-left3");
    galleryImages[currentImage].classList.add("slide-left");
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
    lakesText.classList.remove("slide-text9");
    lakesText.classList.add("slide-text10");
    belintashText.classList.remove("slide-text8");
    belintashText.classList.add("slide-text9");
    throatText.classList.remove("slide-text7");
    throatText.classList.add("slide-text8");
    bridgesText.classList.remove("hidden");
    bridgesText.classList.add("slide-text7");
    galleryImages[0].classList.add("hidden");
    [...galleryImages].forEach((image) => {
      image.classList.add("hidden");
    });
  }
  if (currentImage === 4) {
    galleryImages[currentImage - 1].classList.add("hidden");
    image5.classList.remove("slide-left8");
    image5.classList.add("slide-left9");
    lakesText.classList.remove("slide-text10");
    lakesText.classList.add("slide-text11");
    image6.classList.remove("slide-left7");
    image6.classList.add("slide-left8");
    belintashText.classList.remove("slide-text9");
    belintashText.classList.add("slide-text10");
    image7.classList.remove("slide-left6");
    image7.classList.add("slide-left7");
    throatText.classList.remove("slide-text8");
    throatText.classList.add("slide-text9");
    image8.classList.remove("slide-left5");
    image8.classList.add("slide-left6");
    bridgesText.classList.remove("slide-text7");
    bridgesText.classList.add("slide-text8");
    galleryImages[0].classList.remove("hidden");
    galleryImages[0].classList.add("slide-left10");
    srebarnaText.classList.remove("slide-left");
    srebarnaText.classList.remove("slide-text");
    srebarnaText.classList.remove("hidden");
    srebarnaText.classList.add("slide-text7");
  }
  if (currentImage === 5) {
    image6.classList.remove("slide-left8");
    image6.classList.add("slide-left9");
    belintashText.classList.remove("slide-text10");
    belintashText.classList.add("slide-text11");
    image7.classList.remove("slide-left7");
    image7.classList.add("slide-left8");
    throatText.classList.remove("slide-text9");
    throatText.classList.add("slide-text10");
    image8.classList.remove("slide-left6");
    image8.classList.add("slide-left7");
    bridgesText.classList.remove("slide-text8");
    bridgesText.classList.add("slide-text9");
    galleryImages[0].classList.remove("slide-left10");
    galleryImages[0].classList.add("slide-left11");
    srebarnaText.classList.remove("slide-text7");
    srebarnaText.classList.remove("slide-text");
    srebarnaText.classList.add("slide-text3");
    galleryImages[1].classList.remove("hidden");
    galleryImages[1].classList.remove("slide-left2");
    galleryImages[1].classList.add("slide-left12");
    rilaText.classList.remove("hidden");
    rilaText.classList.remove("slide-text1");
    rilaText.classList.remove("slide-text4");
    rilaText.classList.add("slide-text7");
  }
  if (currentImage === 6) {
    image7.classList.remove("slide-left8");
    image7.classList.add("slide-left9");
    throatText.classList.remove("slide-text10");
    throatText.classList.add("slide-text11");
    image8.classList.remove("slide-left7");
    image8.classList.add("slide-left8");
    bridgesText.classList.remove("slide-text9");
    bridgesText.classList.add("slide-text10");
    galleryImages[0].classList.remove("slide-left11");
    galleryImages[0].classList.add("slide-left13");
    srebarnaText.classList.remove("slide-text3");
    srebarnaText.classList.remove("slide-text");
    srebarnaText.classList.add("slide-text6");
    galleryImages[1].classList.remove("slide-left12");
    galleryImages[1].classList.add("slide-left14");
    rilaText.classList.remove("slide-text7");
    rilaText.classList.add("slide-text8");
    galleryImages[2].classList.remove("hidden");
    galleryImages[2].classList.remove("slide-left3");
    galleryImages[2].classList.add("slide-left15");
    madaraText.classList.remove("hidden");
    madaraText.classList.remove("slide-text2");
    madaraText.classList.remove("slide-text5");
    madaraText.classList.add("slide-text7");
  }
  if (currentImage === 7) {
    image8.classList.remove("slide-left8");
    image8.classList.add("slide-left9");
    bridgesText.classList.remove("slide-text10");
    bridgesText.classList.add("slide-text11");
    galleryImages[0].classList.remove("slide-left13");
    galleryImages[0].classList.add("slide-left16");
    srebarnaText.classList.remove("slide-text6");
    srebarnaText.classList.remove("slide-text");
    srebarnaText.classList.add("slide-text1");
    galleryImages[1].classList.remove("slide-left14");
    galleryImages[1].classList.add("slide-left17");
    rilaText.classList.remove("slide-text8");
    rilaText.classList.add("slide-text2");
    galleryImages[2].classList.remove("slide-left15");
    galleryImages[2].classList.add("slide-left18");
    madaraText.classList.remove("slide-text7");
    madaraText.classList.remove("slide-text");
    madaraText.classList.add("slide-text3");
    galleryImages[3].classList.remove("hidden");
    galleryImages[3].classList.remove("slide-left4");
    galleryImages[3].classList.add("slide-left19");
    prohodnaText.classList.remove("hidden");
    prohodnaText.classList.remove("slide-text");
    prohodnaText.classList.add("slide-text7");
  }
  currentImage++;
});
