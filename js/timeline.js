const dots = document.querySelectorAll("circle");
const lines = document.querySelectorAll("line");
const rects = document.querySelectorAll("rect");    
const paths = document.querySelectorAll(".timeline-path");
const texts = document.querySelectorAll(".timeline-text");
const image1 = document.querySelector(".timeline-img");
const image2 = document.querySelector(".timeline-img1");
const image3 = document.querySelector(".timeline-img2");
const image4 = document.querySelector(".timeline-img3");
const image51 = document.querySelector(".timeline-img4");
const image61 = document.querySelector(".timeline-img5");
const image71 = document.querySelector(".timeline-img6");
const image81 = document.querySelector(".timeline-img7");
const image9 = document.querySelector(".timeline-img8");
const image10 = document.querySelector(".timeline-img9");
const image11 = document.querySelector(".timeline-img10");
const image12 = document.querySelector(".timeline-img11");
const image13 = document.querySelector(".timeline-img12");
const image14 = document.querySelector(".timeline-img13");
const image15 = document.querySelector(".timeline-img14");
console.log(image1);
console.log(dots);
console.log(lines);
console.log(rects);

// [...lines].forEach(line => {
//     line.style.display = "none";
// });
// [...rects].forEach(rect => {
//     rect.style.display = "none";
// });
// [...paths].forEach(path => {
//     path.style.display = "none";
// });
// [...texts].forEach(text => {
//     text.style.display = "none";
// });
[...dots].forEach((dot, index) => {
    dot.addEventListener("click", () => {
        if (index === 0) {

            paths[index].style.display = "block";
            texts[index].style.display = "block";
            rects[index].style.display = "block";
            rects[index + 1].style.display = "block";
            lines[index].style.display = "block";
            paths[index].classList.add("active-content");
            texts[index].classList.add("active-content");
            rects[index].classList.add("active-content");
            rects[index + 1].classList.add("active-content");
            lines[index].classList.add("active-content");
        } else if (index === 1) {
            paths[8].style.display = "block";
            texts[8].style.display = "block";
            rects[16].style.display = "block";
            rects[17].style.display = "block";
            lines[8].style.display = "block";
            paths[8].classList.add("active-content1");
            texts[8].classList.add("active-content1");
            rects[16].classList.add("active-content1");
            rects[17].classList.add("active-content1");
            lines[8].classList.add("active-content1");
        }
        else if (index === 2) {
            paths[1].style.display = "block";
            texts[1].style.display = "block";
            rects[3].style.display = "block";
            rects[2].style.display = "block";
            lines[1].style.display = "block";
            paths[1].classList.add("active-content");
            texts[1].classList.add("active-content");
            rects[3].classList.add("active-content");
            rects[2].classList.add("active-content");
            lines[1].classList.add("active-content");
        } else if (index === 3) {
            paths[9].style.display = "block";
            texts[9].style.display = "block";
            rects[18].style.display = "block";
            rects[19].style.display = "block";
            lines[9].style.display = "block";
            paths[9].classList.add("active-content1");
            texts[9].classList.add("active-content1");
            rects[18].classList.add("active-content1");
            rects[19].classList.add("active-content1");
            lines[9].classList.add("active-content1");
        } else if (index === 4) {
            paths[2].style.display = "block";
            texts[2].style.display = "block";
            rects[4].style.display = "block";
            rects[5].style.display = "block";
            lines[2].style.display = "block";
            paths[2].classList.add("active-content");
            texts[2].classList.add("active-content");
            rects[4].classList.add("active-content");
            rects[5].classList.add("active-content");
            lines[2].classList.add("active-content");
        } else if (index === 5) {
            paths[10].style.display = "block";
            texts[10].style.display = "block";
            rects[20].style.display = "block";
            rects[21].style.display = "block";
            lines[10].style.display = "block";
            paths[10].classList.add("active-content1");
            texts[10].classList.add("active-content1");
            rects[20].classList.add("active-content1");
            rects[21].classList.add("active-content1");
            lines[10].classList.add("active-content1");
        } else if (index === 6) {
            paths[3].style.display = "block";
            texts[3].style.display = "block";
            rects[6].style.display = "block";
            rects[7].style.display = "block";
            lines[3].style.display = "block";
            paths[3].classList.add("active-content");
            texts[3].classList.add("active-content");
            rects[6].classList.add("active-content");
            rects[7].classList.add("active-content");
            lines[3].classList.add("active-content");
        } else if (index === 7) {
            paths[14].style.display = "block";
            texts[14].style.display = "block";
            rects[28].style.display = "block";
            rects[29].style.display = "block";
            lines[14].style.display = "block";
            paths[14].classList.add("active-content1");
            texts[14].classList.add("active-content1");
            rects[28].classList.add("active-content1");
            rects[29].classList.add("active-content1");
            lines[14].classList.add("active-content1");
        } else if (index === 8) {
            paths[4].style.display = "block";
            texts[4].style.display = "block";
            rects[8].style.display = "block";
            rects[9].style.display = "block";
            lines[4].style.display = "block";
            paths[4].classList.add("active-content");
            texts[4].classList.add("active-content");
            rects[8].classList.add("active-content");
            rects[9].classList.add("active-content");
            lines[4].classList.add("active-content");
        } else if (index === 9) {
            paths[11].style.display = "block";
            texts[11].style.display = "block";
            rects[22].style.display = "block";
            rects[23].style.display = "block";
            lines[11].style.display = "block";
            paths[11].classList.add("active-content1");
            texts[11].classList.add("active-content1");
            rects[22].classList.add("active-content1");
            rects[23].classList.add("active-content1");
            lines[11].classList.add("active-content1");
        } else if (index === 10) {
            paths[5].style.display = "block";
            texts[5].style.display = "block";
            rects[10].style.display = "block";
            rects[11].style.display = "block";
            lines[5].style.display = "block";
            paths[5].classList.add("active-content");
            texts[5].classList.add("active-content");
            rects[10].classList.add("active-content");
            rects[11].classList.add("active-content");
            lines[5].classList.add("active-content");
        } else if (index === 11) {
            paths[12].style.display = "block";
            texts[12].style.display = "block";
            rects[24].style.display = "block";
            rects[25].style.display = "block";
            lines[12].style.display = "block";
            paths[12].classList.add("active-content1");
            texts[12].classList.add("active-content1");
            rects[24].classList.add("active-content1");
            rects[25].classList.add("active-content1");
            lines[12].classList.add("active-content1");
        } else if (index === 12) {
            paths[6].style.display = "block";
            texts[6].style.display = "block";
            rects[12].style.display = "block";
            rects[13].style.display = "block";
            lines[6].style.display = "block";
            paths[6].classList.add("active-content");
            texts[6].classList.add("active-content");
            rects[12].classList.add("active-content");
            rects[13].classList.add("active-content");
            lines[6].classList.add("active-content");
        } else if (index === 13) {
            paths[13].style.display = "block";
            texts[13].style.display = "block";
            rects[26].style.display = "block";
            rects[27].style.display = "block";
            lines[13].style.display = "block";
            paths[13].classList.add("active-content1");
            texts[13].classList.add("active-content1");
            rects[26].classList.add("active-content1");
            rects[27].classList.add("active-content1");
            lines[13].classList.add("active-content1");
        } else if (index === 14) {
            paths[7].style.display = "block";
            texts[7].style.display = "block";
            rects[14].style.display = "block";
            rects[15].style.display = "block";
            lines[7].style.display = "block";
            paths[7].classList.add("active-content");
            texts[7].classList.add("active-content");
            rects[14].classList.add("active-content");
            rects[15].classList.add("active-content");
            lines[7].classList.add("active-content");
        }
        console.log("click");
    });
    dot.addEventListener("mouseover", () => {
        dot.style.cursor = "pointer";
    });

});
paths[0].addEventListener("mouseover", () => {
    image1.style.display = "block";
    image1.classList.add("image-active");
});
paths[0].addEventListener("mouseout", () => {
    image1.classList.add("image-active-reverse");
    sleep(1000).then(() => {
        image1.classList.remove("image-active-reverse");
        image1.classList.remove("image-active");
        image1.style.display = "none";

    });
    console.log("mouseout");
});
paths[8].addEventListener("mouseover", () => {
    image2.style.display = "block";
    image2.classList.add("image-active1");
});
paths[8].addEventListener("mouseout", () => {
    image2.classList.add("image-active1-reverse");
    sleep(1000).then(() => {
        image2.classList.remove("image-active1-reverse");
        image2.classList.remove("image-active1");
        image2.style.display = "none";

    });
    console.log("mouseout");
});
paths[1].addEventListener("mouseover", () => {
    image3.style.display = "block";
    image3.classList.add("image-active");
});
paths[1].addEventListener("mouseout", () => {
    image3.classList.add("image-active-reverse");
    sleep(1000).then(() => {
        image3.classList.remove("image-active-reverse");
        image3.classList.remove("image-active");
        image3.style.display = "none";

    });
    console.log("mouseout");
});
paths[9].addEventListener("mouseover", () => {
    image4.style.display = "block";
    image4.classList.add("image-active1");
});
paths[9].addEventListener("mouseout", () => {
    image4.classList.add("image-active1-reverse");
    sleep(1000).then(() => {
        image4.classList.remove("image-active1-reverse");
        image4.classList.remove("image-active1");
        image4.style.display = "none";

    });
    console.log("mouseout");
});
paths[2].addEventListener("mouseover", () => {
    image51.style.display = "block";
    image51.classList.add("image-active");
});
paths[2].addEventListener("mouseout", () => {
    image51.classList.add("image-active-reverse");
    sleep(1000).then(() => {
        image51.classList.remove("image-active-reverse");
        image51.classList.remove("image-active");
        image51.style.display = "none";

    });
    console.log("mouseout");
});
paths[10].addEventListener("mouseover", () => {
    image61.style.display = "block";
    image61.classList.add("image-active1");
});
paths[10].addEventListener("mouseout", () => {
    image61.classList.add("image-active1-reverse");
    sleep(1000).then(() => {
        image61.classList.remove("image-active1-reverse");
        image61.classList.remove("image-active1");
        image61.style.display = "none";

    });
    console.log("mouseout");
});
paths[3].addEventListener("mouseover", () => {
    image71.style.display = "block";
    image71.classList.add("image-active");
});
paths[3].addEventListener("mouseout", () => {
    image71.classList.add("image-active-reverse");
    sleep(1000).then(() => {
        image71.classList.remove("image-active-reverse");
        image71.classList.remove("image-active");
        image71.style.display = "none";

    });
    console.log("mouseout");
});
paths[14].addEventListener("mouseover", () => {
    image81.style.display = "block";
    image81.classList.add("image-active1");
});
paths[14].addEventListener("mouseout", () => {
    image81.classList.add("image-active1-reverse");
    sleep(1000).then(() => {
        image81.classList.remove("image-active1-reverse");
        image81.classList.remove("image-active1");
        image81.style.display = "none";

    });
    console.log("mouseout");
});
paths[4].addEventListener("mouseover", () => {
    image9.style.display = "block";
    image9.classList.add("image-active");
});
paths[4].addEventListener("mouseout", () => {
    image9.classList.add("image-active-reverse");
    sleep(1000).then(() => {
        image9.classList.remove("image-active-reverse");
        image9.classList.remove("image-active");
        image9.style.display = "none";

    });
    console.log("mouseout");
});
paths[11].addEventListener("mouseover", () => {
    image10.style.display = "block";
    image10.classList.add("image-active1");
});
paths[11].addEventListener("mouseout", () => {
    image10.classList.add("image-active1-reverse");
    sleep(1000).then(() => {
        image10.classList.remove("image-active1-reverse");
        image10.classList.remove("image-active1");
        image10.style.display = "none";

    });
    console.log("mouseout");
});
paths[5].addEventListener("mouseover", () => {
    image11.style.display = "block";
    image11.classList.add("image-active");
});
paths[5].addEventListener("mouseout", () => {
    image11.classList.add("image-active-reverse");
    sleep(1000).then(() => {
        image11.classList.remove("image-active-reverse");
        image11.classList.remove("image-active");
        image11.style.display = "none";

    });
    console.log("mouseout");
});
paths[12].addEventListener("mouseover", () => {
    image12.style.display = "block";
    image12.classList.add("image-active1");
});
paths[12].addEventListener("mouseout", () => {
    image12.classList.add("image-active1-reverse");
    sleep(1000).then(() => {
        image12.classList.remove("image-active1-reverse");
        image12.classList.remove("image-active1");
        image12.style.display = "none";

    });
    console.log("mouseout");
});
paths[6].addEventListener("mouseover", () => {
    image13.style.display = "block";
    image13.classList.add("image-active");
});
paths[6].addEventListener("mouseout", () => {
    image13.classList.add("image-active-reverse");
    sleep(1000).then(() => {
        image13.classList.remove("image-active-reverse");
        image13.classList.remove("image-active");
        image13.style.display = "none";

    });
    console.log("mouseout");
});
paths[13].addEventListener("mouseover", () => {
    image14.style.display = "block";
    image14.classList.add("image-active1");
});
paths[13].addEventListener("mouseout", () => {
    image14.classList.add("image-active1-reverse");
    sleep(1000).then(() => {
        image14.classList.remove("image-active1-reverse");
        image14.classList.remove("image-active1");
        image14.style.display = "none";

    });
    console.log("mouseout");
});
paths[7].addEventListener("mouseover", () => {
    image15.style.display = "block";
    image15.classList.add("image-active");
});
paths[7].addEventListener("mouseout", () => {
    image15.classList.add("image-active-reverse");
    sleep(1000).then(() => {
        image15.classList.remove("image-active-reverse");
        image15.classList.remove("image-active");
        image15.style.display = "none";

    });
    console.log("mouseout");
});