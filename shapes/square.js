import { Shape } from './shape.js';

export class Square extends Shape {
    constructor(shapeFill, textFill, text) {
        super(shapeFill, textFill, text);
    }

    render() {
        return `<svg height="300" width="300">
            <rect x="0" y="0" rx="20" ry="20" width="300" height="300" fill="${this.shapeFill}" />
            <text x="150" y="150" font-family="Arial" font-size="86" fill="${this.textFill}" text-anchor="middle" dominant-baseline="middle">${this.text}</text>
        </svg>`;
    }
};