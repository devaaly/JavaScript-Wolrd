// Exercice #4

let userInput = Number(prompt("Insert a positive number !"))


for(let a = userInput; a <= userInput + 2; a++){

    console.log(a)

for(let i = 0; i <= 10; i++){

    console.log(a + " * " + i + " = " + (a*i)); 

    }
}

// Exercice #5 - School - DO/while

    let condition = true;
    let maiorNotaH = 0;
    let somaNotas = 0;
    let media = 0;
    let userM = 0;
    let userover7 = 0;
    let maior = 0;

while(condition){
    var userN = prompt("Inset your score");
    let userS = prompt("Inset your sexo (M / W)");
    let userC = prompt("Anything else ? (Y / N)");

    if(userN > maiorNotaH && (userS === "M" || userS === "m" )){
        maiorNotaH = userN;
    }
    if((userS === "M" || userS === "m" )){
        userM++
    }
    if((userS === "W" || userS === "w" ) && userN <= 7){
        userover7++
    } 
    if((userS === "Y" || userS === "y" )){
        condition = false;
    }

    alunos++
    somaNotas += parseFloat(userN)
}


console.log("Media dos alunos: " + (somaNotas / alunos))
console.log("Quantidade de homens: " + userM)
console.log("Quantidade de mulheres over 7: " + userover7)
console.log("Maior nota Homens: " + maiorNotaH)