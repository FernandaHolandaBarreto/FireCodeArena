const readline = require(`readline-sync`)

let quantidade = readline.questionInt("Quantos numeros deseja cadastrar? ")

let multiplosDe3 = []
let outrosNumeros = []

for (let i = 0; i < quantidade; i++) {
    let numero = readline.questionInt('Digite um numero: ')

    if (numero % 3 == 0) {
        multiplosDe3.push(numero)
    } else {
        outrosNumeros.push(numero)
    }
}

console.log('Multiplos de 3:', multiplosDe3);
console.log('Outros numeros:', outrosNumeros);