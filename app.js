
let game = new Game();

drawCanvas();



function drawCanvas() {
    drawBackground(backgroundColor);
    window.requestAnimationFrame(drawCanvas);


    game.update();

}




