class Shape {
    constructor(x, y, fill, stroke, strokeWidth) {
        this.x = x;
        this.y = y;
        this.fill = fill;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
    }

    render() {
        // This method should be overridden in subclasses
        throw new Error("render() must be implemented in subclass");
    }
};

class Triangle extends Shape {
    constructor(x, y, fill, stroke, strokeWidth, points) {
        super(x, y, fill, stroke, strokeWidth);
        this.points = points; // Points should be a string in the format "x1,y1 x2,y2 x3,y3"
    }

    render() {
        return `<polygon points="${this.points}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />`;
    }
};

class Circle extends Shape {
    constructor(x, y, fill, stroke, strokeWidth, radius) {
        super(x, y, fill, stroke, strokeWidth);
        this.radius = radius;
    }

    render() {
        return `<circle cx="${this.x}" cy="${this.y}" r="${this.radius}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />`;
    }
};

class Square extends Shape {
    constructor(x, y, fill, stroke, strokeWidth, sideLength) {
        super(x, y, fill, stroke, strokeWidth);
        this.sideLength = sideLength;
    }

    render() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.fill}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" />`;
    }
};

export {Shape, Triangle, Circle, Square};