import {questionFloat} from 'readline-sync'

// // console.log("Olá Mundo!");
// // let variavel = "Oi";
// // variavel = "Mundo"
// const constante: string = "";

//Calcule a media de quatro notas
//e se o aluno tiver nota maior que 7, mostre aprovado
//mostre aprovado, senão reprovado

//ENTRADA

//array ou vetor - conjunto de elementos do mesmo tipo

let notas: [number,number,number,number,number] = [0,0,0,0,0];

for (let i = 0; i < 5; i++){
    const nota = questionFloat("Informe a nota "+(i+1)+":");
    notas[i] = nota;
}

const nota1 = questionFloat("Informe a nota 1: ");
const nota2 = questionFloat("Informe a nota 2: ");
const nota3 = questionFloat("Informe a nota 3: ");
const nota4 = questionFloat("Informe a nota 4: ");
const nota5 = questionFloat("Informe a nota 5: ");

//PROCESSAMENTO
const media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

//SAIDA
//se a media for maior que 7, mostre aprovado
//senão, mostre reprovado
if (media > 7) {
    console.log("Aluno Aprovado Média " + media);
}else {
    console.log("Aluno Reprovado Média "+ media);
}



