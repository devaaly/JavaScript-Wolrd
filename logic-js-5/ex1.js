// Exercice #1

// let numbers = [];
// let contador = 0;

// while(contador <= 9){
//     let userName = prompt("Insert your name");
//     let userNumber = prompt("Insert a positive number");
//     numbers[contador] = userNumber;

//     contador++;
//     console.log(contador + " - " + userNumber);
// }

// Exercice #2 - Reverse Array

// let numbers = [];
// let contador = 0;

// while(contador <= 2){
//     let userName = prompt("Insert your name");
//     let userNumber = prompt("Insert a positive number");
//     numbers[contador] = userNumber;

//     contador++
// }


// for(let i = numbers.length - 1; i >= 0; i--){
//     console.log(numbers[i])
// }

// Exercice #3

// let userNumber = parseInt(prompt("Insert a positive number"));
// let fibonacci = [];
// fibonacci [0] = userNumber - 1;
// fibonacci [1] = userNumber;

// for( let i = 2; i < 10; i++){
//     fibonacci[i] = fibonacci[i - 1] + fibonacci [i - 2];
// }

// console.log(fibonacci)

// Exercice #4 - Avaliation of Class

// let names = [];
// let score = [];
// let student = 0;

// let condition = true;

// while(condition){
//     let userName = prompt("Insert the name");
//     var userScore = prompt("Insert the score");
//     let cont = prompt("Inser 1 for continue and 2 for stop");

//     names[student] = userName;
//     score[student] = userScore;

//     student++;
    
//     if(cont != 1){
//         condition = false;
//     }

// console.log("Student " + student + " - " + userName + " score: " + userScore)

// }


// function media (){
//     let totalS =+ userScore;
//     let media = totalS / student;

//     return media;
// }

// console.log("Media of students: " + media())

// Exercice #5 - cars system

let model = [];
let year = [];
let value = [];
let cars =[];
let condition = true;

while(condition){
    let userModel = prompt("Insert the model of the car");
    let userYear = Number(prompt("Insert the year of the car"));
    let userValue = prompt("Insert the price of the car");
    let cont = prompt("Insert 2 for stop")

    model.push(userModel);
    year.push(userModel);
    value.push(userModel);

    console.log(`${userModel} - ${userYear} - ${userValue}`);

    if(cont != 1){
        condition = false;
    }
 
}







