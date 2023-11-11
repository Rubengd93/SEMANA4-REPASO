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
    
}