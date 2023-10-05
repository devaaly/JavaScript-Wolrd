// class Computador {

//     Tipo
//     Processador
//     Video
//     Armazenamento
//     MemoriaRam
//     SSD
//     constructor(Tipo, Processador, Video, Armazenamento, MemoriaRam, SSD){
//         this.Tipo = Tipo;
//         this.Processador = Processador;
//         this.Video = Video;
//         this.Armazenamento = Armazenamento;
//         this.MemoriaRam = MemoriaRam;
//         this.SSD = SSD;
//     }

//     exibir(){
//         console.log("Tipo: " + this.Tipo + " Processador: " + this.Processador + " Video " + this.Video + " Armazenamento " + this.Armazenamento + " MemoriaRam " + this.MemoriaRam + " SSD " + this.SSD)
//     }
// }

// let tipo = "Laptop";
// let Processador = "Core I7";
// let Video = "Integrado";
// let Armazenamento = "500";
// let MemoriaRam = "32";
// let SSD = true;

// let computador = new Computador (tipo, Processador, Video, Armazenamento, MemoriaRam, SSD);

// Run system 

let result = 0;

class Cars {
    Name;
    Potencia;
    VelocidadeMaxima;
    Acelacao;

    constructor(Name, Potencia, VelocidadeMaxima, Acelacao) {
        this.Name = Name;
        this.Potencia = Potencia;
        this.VelocidadeMaxima = VelocidadeMaxima;
        this.Acelacao = Acelacao;
    }

    calcMenorTempo(distancia) {
        result = distancia / (this.VelocidadeMaxima / this.Acelacao);

        return result;
    }
}

class Corrida {
    name;
    tipo;
    distancia;
    participantes;
    vencedor;

    constructor(name, tipo, distancia) {
        this.name = name;
        this.tipo = tipo;
        this.distancia = distancia;
        this.participantes = [];
        this.vencedor = "";
    }

    Vencedor (){
        let menorTempo = this.participantes[0].calcMenorTempo(this.distancia);
        let vencedor = this.participantes[0];
        for( let i = 1; i < this.participantes.length; i++){
            let tempo = this.participantes[i].calcMenorTempo(this.distancia);
            if(tempo < menorTempo){
                menorTempo = tempo
                vencedor = this.participantes[i]
            }
        }
        return this.vencedor = vencedor;
    }

    MostrarVencedor(){
        alert("O vencedor e: " + this.vencedor.nome)
    }

}

let corrida = new Corrida ("Gran Pri", "F1", 5000)

corrida.participantes[0] = new Cars ("Honda", 150, 130, 9)
corrida.participantes[1] = new Cars ("Toyota", 120, 100, 7)
corrida.participantes[2] = new Cars ("Elantra", 180, 900, 15)

corrida.Vencedor();
corrida.MostrarVencedor();




