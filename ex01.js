console.log("Números pares e ímpares")

const readline = require(`readline-sync`)

let numeros = [10, 6, 7, 3, 5, 9]

let  pares = []
let impares = []

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] % 2 == 0) {
        pares.push(numeros[i])
    } else {
        impares.push(numeros[i])
    }

}

console.log("Pares: " + pares)
console.log("Ímpares: " + impares)



