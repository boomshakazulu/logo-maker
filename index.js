const inquirer = require('inquirer');
const fs = require('fs');
//imports classes from shapesjs
const {Circle, Square, Triangle} = require("./lib/shapes");

//creates class SVG to assign shape and text elements to the svg string
class Svg {
    constructor(){
        this.textEl=''
        this.shapeEl=''
    }
    //renders the string needed to make the svg
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeEl}${this.textEl}</svg>`
    }
    //assigns text and color to the string and appends it tp textEl
    assignTextEl(text,color){
        this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    console.log(this.textEl)
    }
    //assigns the shape to the ShapeEl
    assignShapeEl(shape){
        this.shapeEl = shape.render()
        console.log(this.shapeEl)
    }
}
//questions for inquirer
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 letters",
    },
    {
        type: "input",
        name: "textColor",
        message: 'What is the text color (color name or hex)',
    },
    {
        type: "input",
        name: "background",
        message: "Enter a background color(name a hex)",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose which shape you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
]

//async function to await response from the questions before continuing on with the function
async function init(){
    const response = await inquirer.prompt(questions)

    var logoName =""
    if(response.text.length>0&&response.text.length<4){
        logoName = response.text
    }else{
        console.log("invalid characters entered. please enter between 1 and 3 characters")
        return
    }

    let shape;
    if(response.shape ==="square"||response.shape==="Square") {
        shape= new Square()
    }else if(response.shape ==="circle"||response.shape==="Circle"){
        shape= new Circle()
    }else{
        shape = new Triangle()
    }
    
    shape.setColor(response.background)

    var svg = new Svg()
    svg.assignTextEl(logoName, response.textColor)
    svg.assignShapeEl(shape)
    svgString=svg.render()
    writeToFile(svgString); 
    
}
//writes to file or returns error
function writeToFile(data){
    fs.writeFile("logo.svg", data, function(err){
        if(err){
            return console.log(err)
        }
        console.log("Generated logo.svg")
    })
}


init()