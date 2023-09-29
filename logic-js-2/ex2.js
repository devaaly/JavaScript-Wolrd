let userOp = prompt("O que deseja abastecer? (Gasolina, Alcool ou Calibrar)");
let qtdL = 0;

switch (userOp) {
    case "gasolina", "Gasolina":
        let valorG = prompt("Qual valor deseja ?");
        let valorLG = (valorG / 5);
        console.log("Valor abastecido: R$" + valorG);
        console.log("Quantidade de litros: " + valorLG + "L");
        break;

    case "alcool", "Alcool":
        let valorA = prompt("Qual valor deseja ?");
        let valorLA = (valorA / 3);
        console.log("Valor abastecido: R$" + valorA);
        console.log("Quantidade de litros: " + valorLA + "L");
        break;

    case "calibrar", "Calibrar":
        console.log("Pneus calibrados");
        break;

    default:
        alert("Insert a valid option");
        break;
}





