/*Crie uma classe chamada Carro com os seguintes atributos: marca, 
modelo e ano. A classe deve ter um método chamado exibirDetalhes que 
retorne uma string com as informações do carro.*/

class Carro {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes(){
        return `Marca: ${this.marca}, Modelo: ${this.modelo} e Ano: ${this.ano}`;
        //ouconsole.log(`Marca: ${thi.marca}, Modelo: ${this.modelo} e Ano: ${this.ano}`);
    }
}
let carro1 = new Carro('Volkswagen', 'Kombi', 1990);
console.log(carro1.exibirDetalhes());
//ou carro1.exibirDetalhes()

