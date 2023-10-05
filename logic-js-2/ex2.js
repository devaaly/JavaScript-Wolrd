let userOp = prompt("What do you want to fill up? (Gasoline, Alcohol or Calibrate)");
let qtyL = 0;

switch (userOp) {
    case "gasoline", "Petrol":
        let valueG = prompt("What value do you want?");
        let LGvalue = (valueG / 5);
        console.log("Value supplied: R$" + valorG);
        console.log("Quantity of liters: " + LGvalue + "L");
        break;

    case "alcohol", "Alcohol":
        let valueA = prompt("What value do you want?");
        let valueLA = (valueA / 3);
        console.log("Value supplied: R$" + valorA);
        console.log("Quantity of liters: " + valueLA + "L");
        break;

    case "calibrate", "Calibrate":
        console.log("Inflated tires");
        break;

    default:
        alert("Insert a valid option");
        break;
}

