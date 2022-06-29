const canvas = document.getElementById('game_canvas');
const ctx = canvas.getContext('2d');

//setup canvas size
canvas.width = 800;
canvas.height = 500;
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let bacgroundColor = "#515D5B";


//from https://stackoverflow.com/a/7838871
function roundRect( _x, _y, width, height, radius, _color, _lineWidth) {
    if (width < 2 * radius) radius = width / 2;
    if (height < 2 * radius) radius = height / 2;

    ctx.lineWidth= _lineWidth;
    ctx.strokeStyle = _color;
    ctx.beginPath();
    ctx.moveTo(_x + radius, _y);
    ctx.arcTo(_x + width, _y, _x + width, _y + height, radius);
    ctx.arcTo(_x + width, _y + height, _x, _y + height, radius);
    ctx.arcTo(_x, _y + height, _x, _y, radius);
    ctx.arcTo(_x, _y, _x + width, _y, radius);
    ctx.closePath();
    ctx.stroke();
    setContextToDefault();
}

function setContextToDefault(){
    ctx.lineWidth = 1;
    //context.strokeStyle = '#000000';
}

function drawBackground(background) {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}