
// Exercise - Users managment

let nomes = [];
let senhas = [];

let condition = true;

while (condition) {
    let op = prompt("O que deseja fazer ? ( Login, Cadastro, Excluir, Encerrar) ");

    switch (op) {

        case "Login" || "login":
            let loginNome = prompt("Insira um nome");
            let loginSenha = parseInt(prompt("Insira uma senha numerica"));
            let exIndexNomeLogin = nomes.indexOf(loginNome);
            let exIndexSenhaLogin = senhas.indexOf(loginSenha);

            condition = false;
            if (loginNome === nomes[exIndexNomeLogin] && loginSenha === senhas[exIndexSenhaLogin]) {
                console.log("Positivo");
            } else {
                alert("Info invalidas")
                condition = true;
            }
            break;

        case "Cadastro" || "cadastro":
            novoNome = prompt("Insira um nome");
            novaSenha = parseInt(prompt("Insira uma senha numerica"));

            nomes.push(novoNome);
            senhas.push(novaSenha);

            break;

        case "Excluir":
        case "excluir":
            
            let exNome = prompt("Nome que deseja excluir");
            let exSenha = parseInt(prompt("Insira a senha correspondente"));

            let exIndexNome = nomes.indexOf(exNome);
            let exIndexSenha = senhas.indexOf(exSenha);

            if (exIndexNome !== -1 && senhas[exIndexSenha] == exSenha) {
                nomes.splice(exIndexNome, 1);
                senhas.splice(exIndexSenha, 1);
                console.log("Nome e senha excluídos com sucesso.");
                condition = false;

                nomes = nomes.filter(function(nomes){
                    return nomes !== "";
                } )

                senhas = senhas.filter(function(senhas){
                    return senhas !== "";
                } )

            } else {
                alert("Nome ou senha incorretos.");
            }
        default:
            break;
    }

    if (op === "Encerrar" || op === "encerrar") {
        condition = false;
    }
}




