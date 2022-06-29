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

    render(){
        roundRect(this.x, this.y, this.width, this.height, 10, this.color, 3);
    }


}

class Menu {
    constructor() {
        console.log("Menu is created");
        this.width;
        this.height;
        this.buttons = [
            
        ]
    }
}

class Game {

    constructor() {
        //console.log("New game is created");
        this.menu = new Menu();
        this.snake = new Snake();
        this.inGame = false;
    }

    update() {
        //console.log("menu is updated");
    }
    startGame() {
        this.inGame = true;
    }
    endGame() {
        this.inGame = false;
    }
}







