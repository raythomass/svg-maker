const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes.js');

function run(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characetrs to be displayed on the logo.'
        },
        {
            type: 'input',
            name: 'textcolor',
            message: 'Enter a color name or a hexidecimal number to choose the text color.'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for your logo.',
            choices: [
                'Circle',
                'Triangle',
                'Square',
            ]
        },
        {
            type: 'input',
            name: 'shapecolor',
            message: 'Enter a color name or a hexidecimal number to choose the shape color.'
        },
    ])
    .then((response) => {
        if(response.shape === 'Circle'){
            let newShape = new Circle(response.text, response.textcolor, response.shapecolor);
            // newShape.render();
            return fs.writeFile('logo.svg', newShape.render(), (err) =>
            err ? console.log(err) : console.log('Successful'))
        }
        else if(response.shape === 'Triangle'){
            let newShape = new Triangle(response.text, response.textcolor, response.shapecolor);
            // return newShape.render();
            return fs.writeFile('logo.svg', newShape.render(), (err) =>
            err ? console.log(err) : console.log('Successful'))
        }
        else if(response.shape === 'Square'){
            let newShape = new Square(response.text, response.textcolor, response.shapecolor);
            // return newShape.render();
            return fs.writeFile('logo.svg', newShape.render(), (err) =>
            err ? console.log(err) : console.log('Successful')
          );
        }
        
    })
}

// const questions = [
//     {
//         type: 'input',
//         name: 'text',
//         message: 'Enter up to three characetrs to be displayed on the logo.'
//     },
//     {
//         type: 'input',
//         name: 'textcolor',
//         message: 'Enter a color name or a hexidecimal number to choose the text color.'
//     },
//     {
//         type: 'list',
//         name: 'shape',
//         message: 'Choose a shape for your logo.',
//         choices: [
//             'Circle',
//             'Triangle',
//             'Square',
//         ]
//     },
//     {
//         type: 'input',
//         name: 'shapecolor',
//         message: 'Enter a color name or a hexidecimal number to choose the shape color.'
//     },
// ];

function makeShape(){
    if(response.shape === 'circle'){
        let newShape = new Circle(response.text, response.textcolor, response.shapecolor);
        return newShape.render();
    }
    if(response.shape === 'triangle'){
        let newShape = new Triangle(response.text, response.textcolor, response.shapecolor);
        return newShape.render();
    }
    if(response.shape === 'square'){
        let newShape = new Circle(response.text, response.textcolor, response.shapecolor);
        return newShape.render();
    }
};

function makeLogo(response){
    // let svgshape = makeShape(response);
    fs.writeFile('logo.svg', newShape.render());
};


run();

