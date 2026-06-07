console.log("===Separando notas aprovadas e reprovadas===")

let notas = [1, 5, 8, 9, 2, 10, 3, 8]

let aprovados = []

let reprovados = []

for(let i = 0; i < notas.length; i ++){
    if(notas[i] >= 7){
        aprovados.push(notas[i])
    }else {
        reprovados.push(notas[i])
    }
}

console.log("Aprovados" + aprovados)
console.log("Reprovados" + reprovados)
 