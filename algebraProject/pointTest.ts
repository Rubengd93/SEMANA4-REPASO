import { Point } from "./point.js";

let pointOne = new Point(3,4);
let  pointTwo = new Point(-4,5);
let  pointThree = new Point(-4,5);

let coordinates = pointOne.toString();

console.log(coordinates);


let distance = pointOne.distanceTolOrigin();
console.log(distance);


let distancePoint = pointOne.calculateDistance(pointTwo);
console.log(distancePoint);

let pointQuadrant = pointTwo.calcularQuadrant();
console.log(pointQuadrant);


let allPoint = [pointOne,pointTwo, pointThree];
let currentPoint = new Point(2,3);


