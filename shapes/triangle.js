import { Shape } from './shape.js';

export class Triangle extends Shape {
    constructor(shapeFill, textFill, text) {
        super(shapeFill, textFill, text);
    }

    render() {
        return `<svg height="300" width="300">
            <polygon points="200,10 100,183 300,183"  fill="${this.shapeFill}"/>
            <text x="200" y="130" font-family="Arial" font-size="48" fill="${this.textFill}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
        </svg>`;
    }
};