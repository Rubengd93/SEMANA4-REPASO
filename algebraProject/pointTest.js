import { Point } from "./point.js";
let pointOne = new Point(3, 4);
let pointTwo = new Point(6, 5);
let coordinates = pointOne.toString();
console.log(coordinates);
let distance = pointOne.distanceTolOrigin();
console.log(distance);
let distancePoint = pointOne.calculateDistance(pointTwo);
console.log(distancePoint);
