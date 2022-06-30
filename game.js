class SnakeSection {
    constructor() {
        //console.log("section created");
    }
}

class Snake {

    constructor() {
        //console.log("Snake is created");
        this.head = {
            x: 0,
            y: 0
        }
        this.sections = [];
    }

    addSection() {
        this.sections.push(new SnakeSection());
    }
}

class MenuButton {
    constructor(_x, _y, _width, _height, _text, _color) {
        this.x = _x;
        this.y = _y;
        this.height = _height;
        this.width = _width;
        this.text = _text;
        this.defaultColor = _color;
        this.color = this.defaultColor;
        this.clicked = false;
        
        // console.log(`button is created on [${this.x}, ${this.y}] with width ${this.width}`);
        // console.log(canvasWidth);
        // console.log(canvasHeight);

    }

    render() {
        //render border
        if (this.#isCursorOverButton()) {
            this.color = 'yellow';
        }else this.color = this.defaultColor;

        //check for click
        if(click.clicked && this.text == "Play" && this.x <= mousePosition.x && (this.x + this.width) >= mousePosition.x && this.y <= mousePosition.y && (this.y + this.height) >= mousePosition.y){
            isInGame = true;
            click.clicked = false;
        }else{
            click.clicked = false;
            roundRect(this.x, this.y, this.width, this.height, this.height / 2, this.color, 3);

        //render text
        drawText(this.text, (canvasWidth / 2), this.y + 14, "28px Comic Sans MS", this.color);
        }

        

    }
    startGame(_game){
        _game.inGame = true;
    }

    #isCursorOverButton() {
    
        if (this.x <= mousePosition.x && (this.x + this.width) >= mousePosition.x && this.y <= mousePosition.y && (this.y + this.height) >= mousePosition.y) {
        
            return true;
        }
        return false;
    }

}

class Menu {
    constructor(_width, _height) {

        this.width = _width;
        this.height = _height;
        this.X = (canvasWidth - this.width) / 2;
        this.Y = (canvasHeight - this.height) / 2
        this.title = "SNAKE"
        this.buttons = this.#initButtons()
        this.color = "lime";

    }

    render() {
        //draw title
        drawText(this.title, canvasWidth / 2, this.Y + 50, "48px Comic Sans MS", this.color)
        //draw border
        this.#drawBorder();

        //draw buttons
        for (const button of this.buttons) {
            button.render();
        }
    }

    #initButtons() {
        let inputButtons = []

        inputButtons.push(new MenuButton((canvasWidth / 2) - (this.width / 4), 200, (this.width / 2), 60, "Play", "#17FFCE"));
        inputButtons.push(new MenuButton((canvasWidth / 2) - (this.width / 4), 300, (this.width / 2), 60, "Sound On", "#17FFCE"));
        inputButtons.push(new MenuButton((canvasWidth / 2) - (this.width / 4), 400, (this.width / 2), 60, "Settings", "#17FFCE"));

        return inputButtons;
    }

    #drawBorder() {
        roundRect(this.X, this.Y, this.width, this.height, 20, this.color, 5);
    }

}

class Game {

    constructor() {
        //console.log("New game is created");
        this.menu = new Menu(canvasWidth / 3, canvasHeight - 100);
        this.snake = new Snake();
        //this.isGameStarted = false;
    }

    update() {
        //console.log("menu is updated");
        if (!isInGame) {
            this.menu.render();
        }else{
            //this.isGameStarted = true;
            this.playGame()
        }

    }

    playGame(){
        music.pause();
        music.currentTime = 0;
    }
   
}







