console.log("Contagem de Maiores de idade")

const readline = require(`readline-sync`)

let idade = [25, 20, 15, 32, 13]

let maioresDeIdade = []
let menoresDeIdade = []


for (let i = 0; i < idade.length; i++){

    if(idade[i] >= 18){

         maioresDeIdade.push(idade[i])

    } else{

        menoresDeIdade.push(idade[i])
    }
       
    
}


console.log("=========Mostrar========")


console.log("Quantidade de maiores de idade" + maioresDeIdade.length)
console.log("Quantidade de menores de idade" + menoresDeIdade.length)


