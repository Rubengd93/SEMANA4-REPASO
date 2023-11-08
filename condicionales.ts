
function signzodiac(day:number, month:string){

    if((day >= 20 && month === "enero") || (month === "febrero" && day <= 18)){

        console.log(`Tu signo del zodiaco es Acuario`);
        
    }
    else if((day >= 19 && month === "febrero") || (month === "marzo" && day <= 20)){
        
        console.log(`Tu signo del zodiaco es Piscis`);
        
    }
    else if((day >= 21 && month === "marzo") || (month === "abril" && day <= 19)){
        
        console.log(`Tu signo del zodiaco es Aries`);
        
    }
    else if((day >= 20 && month === "abril") || (month === "mayo" && day <= 20)){
        
        console.log(`Tu signo del zodiaco es Tauro`);
        
    }
    else if((day >= 21 && month === "mayo") || (month === "junio" && day <= 20)){
        
        console.log(`Tu signo del zodiaco es Geminis`);
        
    }
    else if((day >= 21 && month === "junio") || (month === "julio" && day <= 22)){
        
        console.log(`Tu signo del zodiaco es Cáncer`);
        
    }
    else if((day >= 23 && month === "julio") || (month === "agosto" && day <= 22)){
        
        console.log(`Tu signo del zodiaco es Leo`);
        
    }
    else if((day >= 23 && month === "agosto") || (month === "septiembre" && day <= 22)){
        
        console.log(`Tu signo del zodiaco es Virgo`);
        
    }
    else if((day >= 23 && month === "septiembre") || (month === "octubre" && day <= 22)){
        
        console.log(`Tu signo del zodiaco es Libra`);
        
    }
    else if((day >= 23 && month === "octubre") || (month === "noviembre" && day <= 21)){
        
        console.log(`Tu signo del zodiaco es Escorpio`);
        
    }
    else if((day >= 22 && month === "noviembre") || (month === "diciembre" && day <= 21)){
        
        console.log(`Tu signo del zodiaco es Sagitario`);
        
    }
    else{
        
        console.log(`Tu signo del zodiaco es Capricornio`);
        
    }

}

signzodiac(30,"junio")


function printContinent(country: string) {

    let europa = ["Alemania", "España", "Andorra", "Belgica", "Francia", "Italia"];
    let asia = ["Afganistan", "Armenia", "Catar", "Camboya", "Corea del norte", "Pakistan"];
    let africa = ["Angola", "Argelia", "Camerun", "Costa de Marfil", "Etiopia", "Italia"];
    let america = ["Argentina", "Brasil", "Canada", "Cuba", "Uruguay", "Venezuela"];
    let oceania = ["Australia", "Nueva Zelanda", "Fiyi", "Samoa", "Tonga", "Samoa"];

    if (europa.includes(country)) {

        console.log(`${country} pertenece a Europa`);

    }
    else if (asia.includes(country)) {
        
        console.log(`${country} pertenece a Asia`);

    }
    else if (africa.includes(country)) {
        
        console.log(`${country} pertenece a África`);

    }
    else if (america.includes(country)) {
        
        console.log(`${country} pertenece a América`);

    }
    else if (oceania.includes(country)) {
        
        console.log(`${country} pertenece a Oceania`);

    }

}

printContinent("Argentina")




function isEven(number:number) {

    if (number % 2 === 0 ) {
        console.log(`El número ${number} es par`);
        
    }
    if (number % 2 != 0){
        console.log(`El número ${number} es impar`);
    }
    
}

isEven(3)