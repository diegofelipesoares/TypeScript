//Classe Convencianal JS
// class Pessoa {
//     constructor(nome: any, idade: any) {
//         this.nome1 = nome;
//         this.idade1 = idade;
//     }
//     apresentar() {
//         console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
//     }
// }

//Classe no Typescript
// as propriedades são declaradas antes do construtor
class PessoaTS {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
