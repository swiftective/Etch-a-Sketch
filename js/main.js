const RANGE_SLIDER = document.querySelector('#myRange')
const COLOR_INPUT_ELEMENT = document.querySelector('#favcolor')
const SKETCH_BOARD_SIZE = 400

let divContainer = document.querySelector('#container')
createSketchPad(RANGE_SLIDER.value)

function createSketchPad(num) {
  divContainer.innerHTML = ''
  for (let i = 0; i < num ** 2; i++) createPixel(num)
  let divPixel = document.querySelectorAll('.pixel')
  divPixel.forEach((data) => data.addEventListener('mouseover', colorHover))
}

function createPixel(num) {
  childNode = document.createElement('div')
  childNode.classList = 'pixel'
  divContainer.style.gridTemplateColumns = `repeat(${num}, ${
    SKETCH_BOARD_SIZE / num
  }px )`
  divContainer.style.gridTemplateRows = `repeat(${num}, ${
    SKETCH_BOARD_SIZE / num
  }px )`
  divContainer.appendChild(childNode)
}

function colorHover(e) {
  e.target.style.background = COLOR_INPUT_ELEMENT.value
}

let scaleCounter = document.querySelector('#counter')
RANGE_SLIDER.onchange = (e) => {
  createSketchPad(e.target.value)
}

RANGE_SLIDER.oninput = (e) => (scaleCounter.innerText = e.target.value)

COLOR_INPUT_ELEMENT.onchange = (e) => (COLOR_DEFAULT = e.target.value)
