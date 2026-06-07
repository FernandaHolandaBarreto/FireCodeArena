console.log("Quantidade de Números Pares")

let numeros = [8, 7, 6, 9, 10, 15, 20, 3, 4, 12]

let quantidadePares = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        quantidadePares = quantidadePares + 1
    }
}

console.log("Total de números pares: " + quantidadePares)