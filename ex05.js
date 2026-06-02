console.log("Encontrando o menor número")

let numeros = [5, 2, 10, 8, 1]
let menor = numeros[0]

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] < menor){
        menor = numeros[i]

    }
    
}


console.log("Menor Número" + menor)