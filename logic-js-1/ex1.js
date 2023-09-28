
// Special Dinner

alert("It just say ( yes / no )")

let hungry = prompt("Are you hungry ?");
let money = prompt("Do you have money");
let restaurant = prompt("Are restaurants open?")

if (hungry === "no" || money === "no"){
    console.log("Dinner at home")
}
if (hungry === "yes" && money === "yes", restaurant === "no"){
    console.log("Order a delivery")
}
if(hungry === "yes" && money === "yes" && restaurant === "yes"){
    console.log("Dinner in your favorite spot. ENJOY")
}

