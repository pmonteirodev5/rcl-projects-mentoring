const width = 50;
const height = 50;
function createColorBlock(colorClass, width, height) {
  const block = document.createElement("div");
  block.classList.add("block");
  block.style.backgroundColor = colorClass;
  block.style.width = `${width}px`;
  block.style.height = `${height}px`;
  block.addEventListener("click", selectSquare);
  return block;
}
function createSquareDiv() {
  const quadrado = document.createElement("div");
  quadrado.classList.add(DomChildren.QUADRADOS);
  quadrado.addEventListener("click", paintPixel);
  return quadrado;
}
function createInputText() {
  const input = document.createElement("input");
  input.setAttribute("type", "number");
  input.setAttribute("id", "total-squares");
  input.setAttribute("name", "total-squares");

  input.style.height = "30px";
  document.querySelector("body").appendChild(input);
}
function createButton() {
  const button = document.createElement("button");
  button.innerText = "Adicionar";
  button.style.height = "30px";
  button.addEventListener("click", () => {
    addSquares();
  });
  document.querySelector("body").appendChild(button);
}
function fillColorPalette() {
  const colors = colorArray();
  colors.map((color) => {
    const colorBlock = createColorBlock(color);
    document.getElementById(DomParents.COLOR_PALETTE).appendChild(colorBlock);
  });
}
function removeSquarePixel(totalSquaresToRemove, widthIncrement) {
  const pixelBoard = document.getElementById(DomParents.PIXEL_BOARD);
  const pixelBoardMaxWidth = parseInt(pixelBoard.style.maxWidth.replace('px','')) - (widthIncrement* 50);

  console.log(pixelBoardMaxWidth);
  pixelBoard.style.maxWidth = `${pixelBoardMaxWidth}px`;

  for (let i = 0; i < totalSquaresToRemove; i++) {
    const child = Array.from(Array(pixelBoard.children).keys())[i];
    if (child) pixelBoard.removeChild(child);
  }
}
function addSquarePixel(totalSquaresToAdd, widthIncrement) {
  const pixelBoard = document.getElementById(DomParents.PIXEL_BOARD);
  const pixelBoardMaxWidth = 300 + (widthIncrement - 5) * 50;
  pixelBoard.style.maxWidth = `${pixelBoardMaxWidth}px`;

  for (let i = 0; i < totalSquaresToAdd; i++) {
    const square = createSquareDiv();
    pixelBoard.appendChild(square);
  }
}
const fillPixelBoard = (totalPixels) => {
  let quadrados = 0,
    tamanhoPadrao = 25,
    totalSquares = totalPixels * totalPixels,
    pixelBoardTotalWidth = 250;
  const pixelBoard = document.getElementById(DomParents.PIXEL_BOARD);
  if (totalPixels > 0) {
    if (totalSquares < pixelBoard.children.length) {
      const quadradosARemover = pixelBoard.children.length - totalSquares;

      removeSquarePixel(quadradosARemover, totalPixels);
    } else {
      const quadradosAAdicionar = totalSquares - pixelBoard.children.length;

      addSquarePixel(quadradosAAdicionar, totalPixels);
    }
  } else {
    quadrados = tamanhoPadrao;
    for (let i = 0; i < quadrados; i++) {
      const square = createSquareDiv();
      pixelBoard.appendChild(square);
    }
  }
};

const clearContainer = (containerName) => {
  const container = document.getElementById(containerName);
  Array.from(Array(container.children).keys()).map((child) =>
    document.getElementById(containerName).remove(child)
  );
};

function getColorPalette() {
  return document.getElementById(DomParents.COLOR_PALETTE);
}

function getPixelBoard() {
  return document.getElementById(DomParents.PIXEL_BOARD);
}
function getSelectedPalette() {
  const selectedPalette = Array.from(
    document.getElementById(DomParents.COLOR_PALETTE).children
  ).filter((colorPalette) => {
    return colorPalette.classList.contains("selected");
  });
  return selectedPalette[0];
}
