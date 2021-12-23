let divContainer = document.querySelector("#container");

function createSketchPad(n, m) {
  let strHTML = "";
  for (let i = 0; i < n * m; i++) {
    strHTML += "<div class='pixel'></div>";
  }
  divContainer.innerHTML = strHTML;
}

createSketchPad(16, 16);

let divPixel = document.querySelectorAll(".pixel");

function colorHover(e) {
  e.target.style.background = "Red";
}

divPixel.forEach((data) => data.addEventListener("mouseover", colorHover));
