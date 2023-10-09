
let hi = document.getElementById("hello");

let nomes = [];
let senhas = [];
let condition = true;

while (condition) {
    switch (userInput()) {
        case "1":
            cadastro();
            break;
        case "2":
            login();
            break;
        case "3":
            excluir();
            break;
        case "4":
            condition = false;
            break;
        default:
            alert("Insira uma opcao valida")
            break;
    }
}

function userInput() {
    let userOption = prompt("Digite 1 para CADASTRAR / 2 para LOGAR / 3 par EXCLUIR / 4 para ENCERRA ");

    return userOption;
}

function cadastro() {
    let userName = prompt("Insira o seu nome");
    let userPass = prompt("Insira uma senha");

    nomes.push(userName);
    senhas.push(userPass);

    if (userName === "" || userPass === "") {
        alert("Insira informacoes validas");
        cadastro();
    } else {
        alert("Usuario cadastrado com sucesso");
    }
}

function login() {
    let loginName = prompt("Insira o seu nome de login");
    let loginSenha = prompt("Insira uma senha de login");

    let verificarNome = nomes.includes(loginName);
    let verificarSenha = senhas.includes(loginSenha);

    if (verificarNome == true && verificarSenha == true) {
        alert("Login feito com sucesso BEM VINDO");

        hi.innerHTML = "<h1> Hello World </h1>";
        document.body.style.backgroundColor = "Red";

        condition = false;
    } else {
        alert("Informacoes invalidas");
        const z = prompt("Insira 1 para cadastrar um novo usuario");

        if (z === "1") {
            cadastro();
        } else {
            login();
        }
        
    }

}

function excluir() {
    let exNome = prompt("Insira o nome que deseja excluir");
    const i = nomes.indexOf(exNome);

    if (i != -1) {
        nomes.splice(i, 1);
        senhas.splice(i, 1);
        alert("User removido com sucesso");
    } else {
        alert("Informacoes invalidas");
        excluir();
    }

}

