
function user (){
    let userNome = prompt("Insira o seu nome");
    let userSalario = prompt("Insira o seu salario");

    reajust(userNome, userSalario);
}

let NewSalario = 0;

function reajust (userNome, userSalario){
    switch (true){
        case (userSalario > 0 && userSalario < 1500):
            NewSalario = parseInt(userSalario * 1.20);
            console.log(userNome + " Seu salario: " + userSalario + " % DE AUMENTO  " + " 20% e seu novo salario: " + NewSalario);
        break;

        case (userSalario > 1501 && userSalario < 2000):
            NewSalario = parseInt(userSalario * 1.15);
            console.log(userNome + " Seu salario: " + userSalario + " % DE AUMENTO " + " 15% e seu novo salario: " + NewSalario);

        break;

        case (userSalario > 2001 && userSalario < 3000):
            NewSalario = parseInt(userSalario * 1.10);
            console.log(userNome + " Seu salario: " + userSalario + " % DE AUMENTO  " + " 10% e seu novo salario: " + NewSalario);

        break;

        case (userSalario > 3001):
            NewSalario = parseInt(userSalario * 0.05);
            console.log(userNome + " Seu salario: " + userSalario + " % DE AUMENTO: " + " 5% e seu novo salario: " + NewSalario);

        break;

    }
    dNovo ()
return NewSalario;

}

function dNovo (){
    let again = prompt("Deseja calcular novamente?");

    if(again === "s"){
        user();
    }
}

user();







