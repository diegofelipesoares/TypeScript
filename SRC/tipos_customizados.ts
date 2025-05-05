// Tipos customizados
// Definindo um tipo customizado para representar um aluno
type aluno = {
    nome: string,
    curso?: string[],// ? define preenchimento opcional
    idade: number,
}

//Criando objetos
const alunos: aluno[] = [
    {
        nome: "Carlos",
        curso: ["Front-end", "UX/UI"],
        idade: 25,
    },
    {
        nome: "Ana",
        curso: ["Back-end", "UX/UI"],
        idade: 30,
    }
]

//instanciando um aluno
const aluno1: aluno = {
    nome: "Lucas",
    idade: 23,
}
