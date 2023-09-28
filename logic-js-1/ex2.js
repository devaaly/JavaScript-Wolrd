alert("It just say (yes / no)")

let userName = prompt("Insert your name");
let userAge = parseInt(prompt("Insert your age"));
let userLicense = prompt("DO you have car licence?");
let userCar = prompt("Do you have car?");

if(userAge < 18 || userLicense === "no"){
    console.log(userName + "You can not drive")
}if(userAge >= 18 && userLicense === "yes" && userCar === "no"){
    console.log("You can drive but don not have car")
}else{
    console.log("You are driver")
}

