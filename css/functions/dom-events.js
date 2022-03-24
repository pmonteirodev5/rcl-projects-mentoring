
function unselectSquare(parentElement) {
    const coresChild = document.querySelector(`#${parentElement}`).children;
    for(let i = 0 ; i < coresChild.length ; i++) {
        const currentChild = coresChild[i];
        if(currentChild.classList.contains(`${DomClasses.SELECTED}`)) {
            currentChild.classList.remove(`${DomClasses.SELECTED}`);
        } 
    }
}
function selectSquare(ev) { 
    unselectSquare(DomParents.COLOR_PALETTE);
    ev.target.classList.add(DomClasses.SELECTED);
}

function paintPixel(ev) {
    
    const pixel = ev.target;
    unselectSquare(DomParents.PIXEL_BOARD);
    const _selectedPalette = getSelectedPalette();
    pixel.style.backgroundColor = _selectedPalette.style.backgroundColor;

}

function addSquares() { 
    const total = document.getElementById('total-squares').value;
    fillPixelBoard(total);
}
