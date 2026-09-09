let valor = Number(prompt("Digite o valor: "))
let desconto = Number(prompt("Digite em o valor da porcentagem: "))
let valor_descontado = (desconto/100)*valor
let valor_final = valor - valor_descontado

alert(`valor a pagar: ${valor_final}`)



// let valor = Number(prompt("preço: "))
// if (valor < 100) {
// alert("Sem desconto...")
// } else if (valor <= 299.99) {
//       let Preco_final =  valor * 0.9
//     alert(`Preço final : ${Preco_final} com 10% de desconto`)
// } else if (valor <= 499.99) {
//         let Preco_final =  valor * 0.8
//     alert(`Preço final : ${Preco_final} com 20% de desconto`)
// } else {
//       let Preco_final =  valor * 0.7
//       alert(`Preço final : ${Preco_final} com 30% de desconto`)
// } 





// let nota = Number(prompt("Digite a sua nota: "))
// let idade = Number(prompt("Digite sua idade: "))
// if (idade <= 12) {
//     alert("Você é Criança!")
// } else if (idade<= 18) {
//  alert("Você é Adolescente!")
// } else if (idade<= 60) {
//  alert("Você é Adulto!")
// } else { 
//     alert("Você é Idoso!")
// }
// if (nota >= 6) {
//     // bloco de código -> true
//     alert("Aprovado!")
// } else if (nota >= 4) {
//  alert("Recuperação!")
// } else { 
//     alert("Reprovado!")
// }

// Solicitar uma idade, e os cenários são:
//  até 12: criança 
//  até 18: Adolescente 
//  até 60: Adulto 
//  depois: Idoso