console.log("====Estatísticas da turma====")

const readline = require('readline-sync');

let quantidade = readline.questionInt('Quantas notas deseja cadastrar? ');

let notas = [];

let soma = 0;
let aprovados = 0;
let reprovados = 0;

for (let i = 0; i < quantidade; i++) {
    let nota = readline.questionInt('Digite a nota: ');

    notas.push(nota);

    soma += nota;

    if (nota >= 7) {
        aprovados++;
    } else {
        reprovados++;
    }
}

let maior = notas[0];
let menor = notas[0];

for (let i = 1; i < notas.length; i++) {
    if (notas[i] > maior) {
        maior = notas[i];
    }

    if (notas[i] < menor) {
        menor = notas[i];
    }
}

let media = soma / quantidade;

console.log('Maior nota:', maior);
console.log('Menor nota:', menor);
console.log('Media:', media);
console.log('Aprovados:', aprovados);
console.log('Reprovados:', reprovados);