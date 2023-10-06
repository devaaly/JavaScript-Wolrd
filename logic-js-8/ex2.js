let arrayA = [13,20,10,22,24,20,27,17,19,14];
let arrayB = [24,22,23,11,15,17,29,14,16,21,10];

let c =[];

function comum (arrayA, arrayB){
    for(let i = 0; i < arrayA.length; i++){
        if(arrayB.indexOf(arrayA[i] > -1)){
            c.push(arrayA[i]);
        }
    }

    return c;
}

console.log(comum(arrayA,arrayB));










