console.log("Positivos e Negativos")

const readline = require("readline-sync")

let Numeros = [5, 10, -2, -8, 17, -4]

let Positivos = []
let Negativos = []

for (let i = 0; i< Numeros.length; i++ ){

    if (Numeros[i] >= 18){
        Positivos.push(Numeros[i])
    } else{
        Negativos.push(Numeros[i])
    }
}

console.log("=======Mostrar=======")

console.log("Positivos" + Positivos)
console.log("Negativos" + Negativos)