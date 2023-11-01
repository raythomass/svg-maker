class Shape{
    constructor(text, textcolor, shapecolor){
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }
};

class Circle extends Shape{
    constructor(text, textcolor, shapecolor){
        super(text, textcolor, shapecolor);
    }
    render(){
        return `
            <svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="${this.shapecolor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
            </svg>`
    };
};

class Triangle extends Shape{
    constructor(text, textcolor, shapecolor){
        super(text, textcolor, shapecolor);
    }
    render(){
        return `
            <svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <polygon points="50 15, 100 100, 0 100" fill="${this.shapecolor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
            </svg>`
    };
};

class Square extends Shape{
    constructor(text, textcolor, shapecolor){
        super(text, textcolor, shapecolor);
    }
    render(){
        return `
            <svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="250" height="250" fill="${this.shapecolor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
            </svg>`
    };
};

module.exports({Shape, Circle, Triangle, Square});