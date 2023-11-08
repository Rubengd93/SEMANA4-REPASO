
function evenNumbers(num:number) {

    for (let i = 0; i <= num; i++) {
        
        if (i % 2 != 0) {
            
            console.log(i);
            
        }
        
    }
    
}

evenNumbers(20)


let num1:number[] = [3 ,4, 5, 6, 6];

function myRevert(myArray:number[]):number[] {

    let res:number[] = [];

    for (let i = myArray.length - 1; i >= 0; i--) {
        
        res.push(myArray[i])

    }

    return res;
    
}

let arrayRevert = myRevert(num1);
console.log(arrayRevert);


let colorsRaimbow:string[] = ["Verde", "Naranja", "Rojo", "Verde", "Añil", "Azul", "Cian"];

function isRaimbow(colors:string[]) {

    let colorsRaimbow:string[] = ["Rojo", "Naranja", "Amarillo", "Verde", "Añil", "Azul", "violet"];

    for (let i = 0; i < colors.length; i++) {
        
        if (colors.includes(colorsRaimbow[i])) {
            console.log(`El color ${colors[i]} esta en el arcoiris`);
            
        }else{
            console.log(`el color ${colors[i]} no esta en el arcoiris`);
            
        }
        
    }
    
}

isRaimbow(colorsRaimbow)



let character:string[] = ["paco","alberto","juan"];

function add(myWords:string[]):number {

    let resultado:number = 0;   
    
    for (let i = 0; i < myWords.length; i++) {
        
        resultado = resultado + myWords[i].length;
        
    }

    return resultado;

}

let suma = add(character);
console.log(suma);
