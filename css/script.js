const rgbColors = [];
const pixels = document.querySelector(".pixels");
const pixelChilds = pixels.children;
const totalPixels = 0;

window.onload = () => {
    //fillColorPalette();
    fillPixelBoard(totalPixels);
    createInputText();
    createButton();
}

