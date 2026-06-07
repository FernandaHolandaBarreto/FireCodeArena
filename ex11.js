console.log("===Dobro dos Números===")

console.log("Dobro dos números")

let numeros = [2, 4, 6, 8, 10]

let dobro = []

for (let i = 0; i < numeros.length; i++) {
    dobro.push(numeros[i] * 2)
}

console.log("Números originais: " + numeros)
console.log("Dobro dos números: " + dobro)