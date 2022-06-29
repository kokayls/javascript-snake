
let game = new Game();

//test area
    //let menuButton = new MenuButton(200, 350, 120, 40, "button", "lime");
//test area end

drawCanvas();



function drawCanvas() {
    drawBackground(backgroundColor);
    window.requestAnimationFrame(drawCanvas);

   
    //test area
        //menuButton.render();
    //test area end

    game.update();

}




