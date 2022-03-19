const dots = document.querySelectorAll("circle");
const lines = document.querySelectorAll("line");
const rects = document.querySelectorAll("rect");    
const paths = document.querySelectorAll(".timeline-path");
const texts = document.querySelectorAll(".timeline-text");
console.log(dots);
console.log(lines);
console.log(rects);

[...lines].forEach(line => {
    line.style.display = "none";
});
[...rects].forEach(rect => {
    rect.style.display = "none";
});
[...paths].forEach(path => {
    path.style.display = "none";
});
[...texts].forEach(text => {
    text.style.display = "none";
});
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
