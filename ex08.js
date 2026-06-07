console.log("Quantidade de números positivos")

let numeros =[-5, 8, 10, -9, 25, 20, -3, -1, -6, 15]

let quantidadesPositivos = 0

for(let i = 0; i < numeros.length; i++){
    if (numeros[i] > 0){
        quantidadesPositivos = quantidadesPositivos +1
    }

}

console.log(console.log("Total de Números Positivos: " + quantidadesPositivos))