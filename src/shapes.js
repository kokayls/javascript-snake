class Point{
    constructor(x, y){
        this.X = x;
        this.Y = y;
    }

    toString(){
        return `{${this.X}, ${this.Y}}`;
    }
}
class Shape{
    constructor(x, y) {
        this.position = new Point(x, y);
    }            
}

class Reactange extends Shape{
    constructor(x, y, width, height) {
        super(x, y);
        this.dimensions = {
            width: width,
            height: height
        };

        //console.log(`Rectangle is created in point [${this.position.X},${this.position.Y}], with dimensions: height: ${this.dimensions.height}, width: ${this.dimensions.width}`);
    }
}

class Circle{
    constructor(x, y, radius){
        this.origo = new Point(x, y);
        this.radius = radius;
    }

    toString(){
        return `Circle: origo:${this.origo.toString()}, radius: ${this.raidus}`;
    }
}

class Rectangle{

}

class Polygon{}

class Trapeze{}