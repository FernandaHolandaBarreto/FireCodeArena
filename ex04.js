console.log("Encontrando o Maior Número")


let numeros = [50, 90, 150, 30, 10]

let maior = numeros[0]

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] > maior) {
        maior = numeros[i]
    }

}

console.log("Maior Número: " + maior)