
let n1 = parseInt(prompt("Insert firts number"));
let n2 = parseInt(prompt("Insert second number"));
let operaction = prompt("Insert second number (- + * /)");
let result = 0;

switch (operaction) {
    case "-":
        result = (n1 - n2);
        console.log("Result: " + result)
        break;
    case "+":
        result = (n1 + n2);
        console.log("Result: " + result)
        break;
    case "*":
        result = (n1 * n2);
        console.log("Result: " + result)
        break;
    case "/":
        result = (n1 / n2);
        console.log("Result: " + result)
        break
    default:
        alert("Inser a valid symbol")
        break;
}

