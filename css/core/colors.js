function randomizeRGB() { 
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;

    return `rgb(${r},${g},${b})`;
}

function colorArray() { 
    const _colorsArray = [];
    for(let i = 0 ; i < 200  ; i++) { 
        const randomColor = randomizeRGB();
        _colorsArray.push(randomColor);
    }
    return _colorsArray;
}