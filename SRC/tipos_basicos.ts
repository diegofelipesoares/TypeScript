//booleana
let estaChovendo: boolean = true;

//number 
let idade: number = 27;

//string
let nacionalidade: string = "Brasileira";

//arrays - pode apenas de um tipo
const colegas: string[] = ["Diego", "Lucas", "João"];
//outras forma de definir array indicando o tipo
const numeros: Array<number> = [1, 2, 3, 4, 5];
//array de apenas leitura
const numerosImutaveis: ReadonlyArray<number> = [1, 2, 3, 4, 5];

//Tuplas - array com tipos diferentes
const aluno: [nome: string, idade: number, estudante:boolean] = ["Diego", 27, true];

//Union Type (União de tipos)
let nota: number | string = 10;
nota = "10";
    //nota = true; // erro
    //nota = []; // erro

//Tipo any - qualquer tipo
let nota2: any = 10;
nota2 = "10";
nota2 = true;
nota2 = [];

// <<< -------------------------------------- >>>
//TIPAGEM DE FUNÇÕES
function funcaoSomar(num1: number, num2: number): number {//define o tipo do retorno
    return num1 + num2;
}

//union type - dois tipos - no retorno de funções
function teste( ): string | number {
    if (10>5) {
        return "10";
    }
    return 10;
}

// <<< -------------------------------------- >>>

//TIPAGEM EM MÉTODOS DE OBJETOS
// Definindo uma classe para conter o método
class Saudacao {
    //método que retorna uma string
    dizOla(): string {
        return "Olá, tudo bem?";
    }
}

// Exemplo de uso
const saudacao = new Saudacao();
console.log(saudacao.dizOla());