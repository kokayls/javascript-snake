const canvas = document.getElementById('game_canvas');
const ctx = canvas.getContext('2d');

//setup canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let isInGame = false;

//https://www.chosic.com/download-audio/28063/
let music = new Audio('ForestWalk.mp3');

let mousePosition = {
    x: 0,
    y: 0
}

let click = {
    x: null,
    y: null,
    clicked: false
}
let backgroundColor = "#515D5B";


function drawCanvas() {
    drawBackground(backgroundColor);
    window.requestAnimationFrame(drawCanvas);

    game.update();

}

//based on https://stackoverflow.com/a/7838871
function roundRect(_x, _y, width, height, radius, _color, _lineWidth) {
    if (width < 2 * radius) radius = width / 2;
    if (height < 2 * radius) radius = height / 2;

    ctx.lineWidth = _lineWidth;
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

function setContextToDefault() {
    ctx.lineWidth = 1;
    //ctx.strokeStyle = '#000000';
}

function drawBackground(background) {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

function drawText(text, x, y, font, color) {
    ctx.strokeStyle = color
    ctx.textAlign = 'center';
    ctx.font = font;
    ctx.textBaseline = "hanging";
    ctx.strokeText(text, x, y);
    //setContextToDefault();
}

function isOverButton() {

}
canvas.addEventListener('mousemove', e => {
    mousePosition.x = e.offsetX;
    mousePosition.y = e.offsetY;
});

canvas.addEventListener('click', e => {
    click.x = e.offsetX;
    click.y = e.offsetY;
    click.clicked = true;
});

document.addEventListener('click', () => {
    music.play();
    music.volume = 0.2;
});