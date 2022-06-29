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
        this.color = _color;
        this.isPressed = false;
    }

    render() {
        roundRect(this.x, this.y, this.width, this.height, 10, this.color, 3);
    }


}

class Menu {
    constructor(_width, _height) {
        this.width = _width;
        this.height = _height;
        this.title = "MENU"
        //this.buttons = this.#initButtons()
        this.color = "lime";

    }

    render() {
        //draw title

        //draw border
        this.#drawBorder();

        //draw buttons
    }

    #initButtons() {
        //button play/pause

        //sound on

        //settings
        return [];
    }
    #drawBorder() {
        let borderX = (canvasWidth - this.width) / 2;
        let borderY = (canvasHeight - this.height) / 2

        roundRect(borderX, borderY, this.width, this.height, 20, this.color, 5);
    }

}

class Game {

    constructor() {
        //console.log("New game is created");
        this.menu = new Menu(canvasWidth / 3, canvasHeight - 100);
        this.snake = new Snake();
        this.inGame = false;
    }

    update() {
        console.log("menu is updated");
        if(!this.inGame){
            this.menu.render();
        }

        
        
    }
    startGame() {
        this.inGame = true;
    }
    endGame() {
        this.inGame = false;
    }
}







