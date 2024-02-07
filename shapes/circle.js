import { Shape } from './shape.js';

export class Circle extends Shape {
    constructor(shapeFill, textFill, text) {
        super(shapeFill, textFill, text);
    }

    render() {
        return `
        <svg height="300" width="300">
            <circle cx="150" cy="150" r="150" fill="${this.shapeFill}" />
            <text x="150" y="150" font-family="Arial" font-size="86" fill="${this.textFill}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
        </svg>`;
    }
};