// Exercice #2 - RH system

let condition = true;

while (condition){
    let userName = prompt("Insert your name");
    let userAge = Number(prompt("Whats is your age?")); 
    var userWage = parseInt(prompt("Insert your monthly wage"));
    let confirm = prompt("Would you like insert anythisng else? (Y / N)");

    if(confirm === "N" || confirm === "n"){
        condition = false;
    }
};
let plus = 0.015;

for (let i = 0; i <= 10; i ++) {
    userWage = userWage + plus;
    plus *= 2;
    const newWage = userWage.toFixed(3);
    console.log((2023 + i) + " = R$ " + newWage);
    
}











