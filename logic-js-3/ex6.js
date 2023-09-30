// ATM system

// let userName = prompt("Insert your name");
// let userId = Number(prompt("Insert your CPF (ONLY NUMBERS)"));

let users = 0;
let condition = true;
let allV = 0;
let bigV = 0;
let newBalance = 0;
let balance = 10;
let totalBalance = 0;

while (condition) {

    let value = parseFloat(prompt("How much do you want to ?"));
    let option = prompt("Would you like withdraw or deposit? (W / D)");
    let continua = prompt("If you want continue press 1 else press 2");
    if (value > bigV) {
        bigV = value;
    }
    switch (option) {

        case "w":

            if (value > newBalance) {
                alert("You do not have enough balance")
                alert("This is your curretly balance: $" + newBalance)
            } else {
                newBalance = totalBalance - value;
            }

            break;
        case "d":
            newBalance = totalBalance + value;
            break;
        default:
            alert("Insert a valid option")
    }
    if (continua === "2") {
        condition = false;

    } else {
        condition = true;
    }


    users++
    totalBalance += value;

}



console.log("This is your balance: $" + newBalance)
console.log("This was the biggest value: $" + bigV)
console.log("This is the media betewen users: $" + (totalBalance / users))





