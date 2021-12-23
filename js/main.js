let divContainer = document.querySelector("#container");

function createSketchPad(n) {
  for (let i = 0; i < n ** 2; i++) {
    childNode = document.createElement("div");
    childNode.classList = "pixel";
    divContainer.appendChild(childNode);
  }
}

createSketchPad(16);

let divPixel = document.querySelectorAll(".pixel");

divPixel.forEach((data) => data.addEventListener("mouseover", colorHover));

function colorHover(e) {
  e.target.style.background = "Red";
}
