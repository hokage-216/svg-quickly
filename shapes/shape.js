export class Shape {
    constructor(shapeFill, textFill, text) {
        this.shapeFill = shapeFill;
        this.textFill = textFill;
        this.text = text;
    }

    render() {
        // This method should be overridden in subclasses
        throw new Error("render() must be implemented in subclass");
    }
};