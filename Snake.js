class Section{
    constructor(){

    }
}

class Snake{

    constructor(){
        console.log("Snake is created");
        this.head = {
            yolo: "hjsbsdhd"
        }
        this.sections = [];   
    }

    addSection(){
        this.sections.push(new Section());
    }
}

class Game{
    
    constructor(){
        console.log("New game is created");
        this.snake = new Snake();
        this.inGame = false;
       
    }

    startGame(){
        this.inGame = true;
    }
    endGame(){
        this.inGame = false;
    }
}



