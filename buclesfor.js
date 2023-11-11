function evenNumbers(num) {
    for (let i = 0; i <= num; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
evenNumbers(20);
let num1 = [3, 4, 5, 6, 6];
function myRevert(myArray) {
    let res = [];
    for (let i = myArray.length - 1; i >= 0; i--) {
        res.push(myArray[i]);
    }
    return res;
}
let arrayRevert = myRevert(num1);
console.log(arrayRevert);
let colorsRaimbow = ["Verde", "Naranja", "Rojo", "Verde", "Añil", "Azul", "Cian"];
function isRaimbow(colors) {
    let colorsRaimbow = ["Rojo", "Naranja", "Amarillo", "Verde", "Añil", "Azul", "violet"];
    for (let i = 0; i < colors.length; i++) {
        if (colors.includes(colorsRaimbow[i])) {
            console.log(`El color ${colors[i]} esta en el arcoiris`);
        }
        else {
            console.log(`el color ${colors[i]} no esta en el arcoiris`);
        }
    }
}
isRaimbow(colorsRaimbow);
let character = ["paco", "alberto", "juan"];
export function add(myWords) {
    let resultado = 0;
    for (let i = 0; i < myWords.length; i++) {
        resultado = resultado + myWords[i].length;
    }
    return resultado;
}
let suma = add(character);
console.log(suma);
