import { Triangle } from "./triangle.js";
import { Point } from "./point.js";


let points = new Point(10,6);
let points2 = new Point(20,8);
let points3 = new Point(40,2);


let sideTriangle = new Triangle(points,points2,points3);

let resultSideTriangle = sideTriangle.calculateLenghtSides();

console.log(resultSideTriangle);