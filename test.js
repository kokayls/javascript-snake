class MenuButton {
    constructor(_x, _y, _width, _height, _text, _color) {
        this.rectangle = new Reactange(_x, _y, _width, _height);
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

