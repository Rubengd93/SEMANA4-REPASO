export class Point {
    private x: number;
    private y:number;

    constructor(x:number, y:number){

        this.x = x;
        this.y = y;

    }


    public setx(x: number){
        return this.x = x;
    }

    
    public sety(y: number) {
        return this.y = y;
    }

    public getx(x: number) {
        return this.x;
    }

    public gety(x: number) {
        return this.y;
    }

    public toString(){
        let x = this.x.toString();
        let y = this.y.toString();

        return `(${x},${y})`;
    }

    public distanceTolOrigin():number{

       let resultado =  Math.sqrt((this.x**2) + (this.y**2));
       return resultado;
        
    }

    calculateDistance(anotherPoint:Point):number{
        let resultado = Math.sqrt((anotherPoint.x - this.x)**2 + (anotherPoint.y -this.y)**2);
        return resultado;
    }

    public calcularQuadrant(){

        if (Math.sign(this.x) === 0 && Math.sign(this.y) === 0) {
            return 0;
            
        }
        else if (Math.sign(this.x) === 1 && Math.sign(this.y) === 1 ){
            return 1;
        }
        else if (Math.sign(this.x) === -1 && Math.sign(this.y) === 1 ){
            return 2;
        }
        else if (Math.sign(this.x) === -1 && Math.sign(this.y) === -1 ){
            return 3;
        }
        else if (Math.sign(this.x) === 1 && Math.sign(this.y) === -1 ){
            return 4;
        }
        
    }

    public calculateNearest(point:Point[]):Point{

        let near = this.calculateDistance(point[0]);
        let match = point[0]; 

        for (let i = 0; i < point.length; i++) {
            
           let result = this.calculateDistance(point[i]);

            if (result < near) {
                
                near = result;
                match = point[i];
                
            }
        

        }
        return match;
        
    }

    
}

let  pointOne = new Point(2,3);
let  pointTwo = new Point(3,4);
let  pointThree = new Point(5,8);

let  pointFour = new Point(7,5);

let allPoint = [pointOne, pointTwo, pointThree];

console.log(pointFour.calculateNearest(allPoint));




