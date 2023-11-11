import { isEven } from "./condicionales.js";
import { add } from "./buclesfor.js";


let wordsc = ["Casa", "Coche", "Ciudad", "Cesta"];
let wordsb = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let wordsv = ["Venezuela", "Veneno", "Voltaje"];

let sumaWordsc = add(wordsc);
let sumaWordsb = add(wordsb);
let sumaWordsv = add(wordsv);

let isEvenWordsc = isEven(sumaWordsc);
let isEvenWordsb = isEven(sumaWordsb);
let isEvenWordsv = isEven(sumaWordsv);

console.log(isEvenWordsc);
console.log(isEvenWordsb);
console.log(isEvenWordsv);
