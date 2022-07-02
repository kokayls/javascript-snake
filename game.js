

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
        this.rectangle = new Reactange(_x, _y, _width, _height);
        this.text = _text;
        this.defaultColor = _color;
        this.color = this.defaultColor;
        this.clicked = false;

    }

    render() {
        //render border
        if (this.#isCursorOverButton()) {
            this.color = 'yellow';
        } else this.color = this.defaultColor;

        //check for click
        if (click.clicked && this.text == "Play" && this.rectangle.position.X <= mousePosition.x && (this.rectangle.position.X + this.rectangle.dimensions.width) >= mousePosition.x && this.rectangle.position.Y <= mousePosition.y && (this.rectangle.position.Y + this.rectangle.dimensions.height) >= mousePosition.y) {
            isInGame = true;
            click.clicked = false;
        }
        else {
            click.clicked = false;
            roundRect(this.rectangle.position.X, this.rectangle.position.Y, this.rectangle.dimensions.width, this.rectangle.dimensions.height, this.rectangle.dimensions.height / 2, this.color, 3);
            drawText(this.text, (canvasWidth / 2), this.rectangle.position.Y + 14, "28px Comic Sans MS", this.color);
        }



    }
    startGame(_game) {
        _game.inGame = true;
    }

    #isCursorOverButton() {

        if (this.rectangle.position.X <= mousePosition.x && (this.rectangle.position.X + this.rectangle.dimensions.width) >= mousePosition.x && this.rectangle.position.Y <= mousePosition.y && (this.rectangle.position.Y + this.rectangle.dimensions.height) >= mousePosition.y) {

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
class Tile {
    constructor() {
        console.log("tile is created");
    }

    render() {
        console.log("tile is rendered");
    }
}
class Map {
    constructor(_tilesX, _tilesY) {
        this.minimumBorder = 10;
        this.tilesX = _tilesX;
        this.tilesY = _tilesY;
        this.tileSizeX = Math.floor((canvasWidth - this.minimumBorder) / _tilesX);
        this.tileSizeY = Math.floor((canvasHeight - this.minimumBorder) / _tilesY);
        this.width = this.tileSizeX * this.tilesX;
        this.height = this.tileSizeY * this.tilesY;
        this.positionX = (canvasWidth - (this.width)) / 2;
        this.positionY = (canvasHeight - (this.height)) / 2;
        this.color = 'black';
        this.tiles = [];

    }
    render() {
        this.#renderBackrdound();
        //this.#renderTiles();
    }

    #renderBackrdound() {
        drawBackground(this.color, this.positionX, this.positionY, this.width, this.height)
    }

}
class Game {

    constructor() {
        //console.log("New game is created");
        this.menu = new Menu(canvasWidth / 3, canvasHeight - 100);
        this.snake = new Snake();
        this.gameMap = new Map(60, 40);
    }

    update() {
        //console.log("menu is updated");
        if (!isInGame) {
            this.menu.render();
        } else {
            //this.isGameStarted = true;
            this.playGame()
        }

    }

    playGame() {
        stopMusic();
        this.gameMap.render();
    }

}







