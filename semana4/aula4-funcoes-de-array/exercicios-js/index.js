// // 1)

// // a)
// listaPessoas = [
//     { nome: "Darvas", idade: 20 },
//     { nome: "Goli", idade: 10 },
//     { nome: "Paulinha", idade: 12 },
//     { nome: "Artur", idade: 89 },
//     { nome: "Soter", idade: 55 },
//     { nome: "Miau", idade: 1 },
//     { nome: "Lu", idade: 32 }
// ]

// function somenteAdulto(arr) {
//     let listaAdultos = arr.filter((item) => {
//         return item.idade >= 20
//     })
//     console.log(listaAdultos)
// }
// somenteAdulto(listaPessoas)

// // b)
// function somenteCrianca(arr) {
//     let listaCriancas = arr.filter((item) => {
//         return item.idade < 20
//     })
//     console.log(listaCriancas)
// }
// somenteCrianca(listaPessoas)



// // 2)
// // const array = [1, 2, 3, 4, 5, 6]

// // function mult2(arr) {
// // arr.forEach((el, index, array) => {
// //     el[index] *= 2
// // })
// // }

// // function mult2(arr){
// // arr.forEach((el, index, array) => {
// //     el[index] *= 3
// //     toString(el[index])
// // })

// // function imparOuPar(arr)
// // arr.forEach((el, index, array) => {
// //     if (el[index] % 2 == 0) {
// //         console.log(el[index] + " é par")
// //     } else {
// //         console.log(el[index] + " é impar")
// //     }
// // })

// // 3)
// const pessoas = [
//     { nome: "Darvas", idade: 20, altura: 1.2 },
//     { nome: "Goli", idade: 10, altura: 1.8 },
//     { nome: "Paulinha", idade: 12, altura: 2.0 },
//     { nome: "Artur", idade: 89, altura: 1.3 },
//     { nome: "Soter", idade: 55, altura: 1.0 },
//     { nome: "Miau", idade: 1, altura: 2.3 },
//     { nome: "Lu", idade: 32, altura: 1.9 }
// ]

// function entrarBrinquedo(arr) {
//     let novoArray = arr.filter((item) => {
//         return item.altura >= 1.5
//     })
//     novoArray = novoArray.filter((item) => {
//         return item.idade > 14
//     })
//     novoArray = novoArray.filter((item) => {
//         return item.idade < 60
//     })

// }

// function naoEntrarBrinquedo(arr) {
//     let novoArray = arr.filter((item) => {
//         return item.altura < 1.5
//     })
//     novoArray = novoArray.filter((item) => {
//         return item.idade < 14
//     })
//     novoArray = novoArray.filter((item) => {
//         return item.idade > 60
//     })

// }

// // 4)
// const consultas = [
//     { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
//     { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
//     { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
//     { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// const email = consultas.map((item, i) => {
//     const genero
//     const genero2
//     if (item[1] == "masculino") {
//         genero = "Sr."
//         genero2 = "lembrá-lo"
//     } else {
//         genero = "Sra."
//         genero2 = "lembrá-la"
//     }
//     if (item[2] == true) {
//         return "Olá, " + genero + " " + item[0] + " . Infelizmente, sua consulta marcada para o dia " + item[3] + " foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la"
//     } else {
//         return "Olá, " + genero + " " + item[0] + ". Estamos enviando esta mensagem para " + genero2 + " da sua consulta no dia " + item[3] + ". Por favor, acuse o recebimento deste e-mail."

//     }

// })

// // 5)
// const contas = [
//     { cliente: "Goli", saldoTotal: 1000, compras: [100, 200, 300] },
//     { cliente: "Paulinha", saldoTotal: 7500, compras: [200, 1040] },
//     { cliente: "Darvas", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
//     { cliente: "Lu", saldoTotal: 100, compras: [100, 200, 1700] },
//     { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
//     { cliente: "Soter", saldoTotal: 1200, compras: [] },
//     { cliente: "Miau", saldoTotal: -300, compras: [800] }
// ]


// contas.forEach((item, index, array) => {
//     var soma = compras.map((item2, i) => {
//         return soma += parseInt(item2[i])
//     })

//     item.saldoTotal = parseInt(item.saldoTotal) - parseInt(soma)
// })