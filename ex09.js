
const readline = require(`readline-sync`)


let nomes = ["Fernanda", "Vanica", "Noelle", "Charlotte", "Rebecca"]

let nomesProcurado = readline.question("Digite um Nome: ")

let encontrado = false

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] === nomesProcurado) {
        encontrado = true
    }
}

if (encontrado == true) {
    console.log("Nome encontrado!")
} else {
    console.log("Nome não encontrado!")
}
