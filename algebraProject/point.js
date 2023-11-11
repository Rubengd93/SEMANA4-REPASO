export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    setx(x) {
        return this.x = x;
    }
    sety(y) {
        return this.y = y;
    }
    getx(x) {
        return this.x;
    }
    gety(x) {
        return this.y;
    }
    toString() {
        let x = this.x.toString();
        let y = this.y.toString();
        return `(${x},${y})`;
    }
    distanceTolOrigin() {
        let resultado = Math.sqrt((this.x ** 2) + (this.y ** 2));
        return resultado;
    }
    calculateDistance(anotherPoint) {
        let resultado = Math.sqrt((anotherPoint.x - this.x) ** 2 + (anotherPoint.y - this.y) ** 2);
        return resultado;
    }
}
