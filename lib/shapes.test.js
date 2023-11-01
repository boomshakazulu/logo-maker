const {Circle, Square, Triangle} = require("./shapes.js")


//sets color to the Shapes class for the given shape to check if it matches the svg string
describe('Circle', () => {
    it('should generate a black circle', () => {
      const shape = new Circle();
      var color =('black')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>`);
    });
  });
//sets color to the Shapes class for the given shape to check if it matches the svg string
  describe('Square', () => {
      it('should generate a blue square', () => {
        const shape = new Square();
        var color =('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}"/>`);
      });
    });
    //sets color to the Shapes class for the given shape to check if it matches the svg string
  describe('Triangle', () => {
      it('should generate a purple triangle', () => {
        const shape = new Triangle();
        var color =('purple')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"/>`);
      });
    });