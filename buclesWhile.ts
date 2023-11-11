
function hasEven(myNums:number[]) {

let i = 0;

    do { 
        if (myNums[i] % 2 === 0) {

            console.log(myNums[i]);
            
        }

        i++;
        
    } while (i <= myNums.length);
    
}

let array = [3, 2, 6, 8, 10, 11];

console.log(hasEven(array));



function startWithM(myNames:string[]) {

    let i = 0;
    

    do {
        if (myNames[i][0].toUpperCase() === "M") {
            
            return true;
            
        }
        i++;
        
    } while (i < myNames.length);
    
}

let namesArray1 = ["Maria", "Miguel", "Monica"];
console.log(startWithM(namesArray1));



