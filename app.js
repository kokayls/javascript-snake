
const canvas = document.getElementById('game_canvas');
const ctx = canvas.getContext('2d');

//setup canvas size
canvas.width = 800;
canvas.height = 500;
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let bacgroundColor= "#515D5B"
let inGame= false;

let game = new Game();


drawCanvas();


function drawCanvas(){
    window.requestAnimationFrame(drawCanvas); 
   
    // if(!inGame){
    //     drawMenu();
    // }
    drawBackground(bacgroundColor);
  
}

function drawBackground(background){
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}