// Import the shape classes
import { Circle } from './shapes/circle.js';
import { Triangle } from './shapes/triangle.js';
import { Square } from './shapes/square.js';

function generateLogo(shapeInfo) {
    let shape;

    switch (shapeInfo.shape) {
        case 'circle':
            shape = new Circle(shapeInfo.shapeFill, shapeInfo.textFill, shapeInfo.text);
            break;
        case 'triangle':
            shape = new Triangle(shapeInfo.shapeFill, shapeInfo.textFill, shapeInfo.text);
            break;
        case 'square':
            shape = new Square(shapeInfo.shapeFill, shapeInfo.textFill, shapeInfo.text);
            break;
        default:
            throw new Error('Unsupported shape type');
    }

    return shape.render();
}

export {generateLogo};