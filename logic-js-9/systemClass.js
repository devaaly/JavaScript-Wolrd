class Aluno {
    nome;
    idade;
    nota;

    constructor(nome, idade, nota) {
        this.nome = nome;
        this.idade = idade;
        this.nota = parseFloat(nota);
    }
}

let alunos = [];

function CadastrarAluno(nome, idade, nota) {

    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].Nome === nome) {
            console.log("Ja existi um usuario com esse nome");
            return null;
        }
    }

    const novoAluno = new Aluno(nome, idade, nota);
    alunos.push(novoAluno);

}

let condition = true;

// while (condition) {
//     let nome = prompt("Insira o nome");
//     let idade = prompt("Insira a idade");
//     let nota = prompt("Insira um nota");

//     let cont = prompt("Insira 1 para adicionar outro aluno");

//     if (cont != "1") {
//         condition = false;
//     }else{
//         CadastrarAluno(nome, idade, nota);
//     }
// }

function ordernarNota() {
    alunos.sort(function(a, b){
        return a.nota - b.nota;
    });
}

function ordernarIdade () {
    alunos.sort(function(a, b) {
        return b.idade - a.idade
    });
}

function ordernarNome (){
    alunos.sort(function(a, b){
        const nomeA = a.nome.toLocaleLowerCase();
        const nomeB = b.nome.toLocaleLowerCase();

        if(nomeA < nomeB) return -1;
        if(nomeA > nomeB) return 1;
        return 0;
    })
}

function mediaGeral(alunos) {
    if (alunos.length === 0) {
      return 0; 
    }
  
    let somaNotas = 0;
    
    alunos.forEach(aluno => {
        somaNotas += Number(aluno.nota)
    });
  
    const mediaGeral = somaNotas / alunos.length;
    return mediaGeral;
  }
 
CadastrarAluno ("Joao","21","5");
CadastrarAluno ("Pedro","20","8");
CadastrarAluno ("Ana","22","5");
CadastrarAluno ("Jef","25","7");

ordernarNota();
console.log("Ordenado por nota:", alunos);

ordernarIdade();
console.log("Ordenado por idade:", alunos);

ordernarNome();
console.log("Ordenado por nome:", alunos);

const media = mediaGeral(alunos);
console.log("Média Geral das Notas dos Alunos:", media);

