/**** Exercícios de Interpretação de Código *****/

// 1)declara uma variável sum com valor inicial de 0. Inicia um for em que declara uma variavel i com valor inicial de 0, enquanto i for menor que 11 ele soma mais 1 ao valor de i, em seguida pega o valor de sum e soma com o valor de i. No momento que i não for mais menor que 11 ele exibe o resultado de sum.

// 2) a) O comando adiciona um valor ao final de uma array.
//    b) [ 10, 15, 20, 25, 30 ]
//    c) valor de 3: [ 12, 15, 18, 27, 30 ]
//       vlalor de 4: [ 12, 20 ]

// 3) 0
//    00
//    000
//    0000

/**** Exercícios de escrita de Código *****/
//4)

/*============ APAGUE ESSE COMENTÁRIO PARA VER O RESULTADO DO CÓDIGO

  const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
  let maiorNumero = 0
  let menorNumero = 1000
  let listaItemB = []
  let listaItemC = []
  let listaItemD = []

  for(let num1 of arrayOriginal){
    if (num1 > maiorNumero){
      maiorNumero = num1
    }
  }

  for(let num1 of arrayOriginal){
    if (num1 < menorNumero){
      menorNumero = num1
    }
  }
  console.log("O maior número é " + maiorNumero + " e o menor é " + menorNumero)

  for(let num1 of arrayOriginal){
    num1 /= 10
    listaItemB.push(num1)
  }
  console.log(listaItemB)

  for(let num1 of arrayOriginal){
    if(num1%2 !== 0){
      listaItemC.push(num1)
    }
  }
  console.log(listaItemC)

  for(let num1 of arrayOriginal){
    num1 = ("O elemento do index i é: " + num1)
    listaItemD.push(num1)
  }
  console.log(listaItemD)

*/



//-------------------------------------------------


//5)

/*============ APAGUE ESSE COMENTÁRIO PARA VER O RESULTADO DO CÓDIGO

const numeroEscolhido = Number(prompt("Digite um Número"))
console.log("Vamos Jogar")

let numeroChute = Number(prompt("Chute um Número"))
let numeroTentativas = 1

 while(numeroChute !== numeroEscolhido){
   console.log("O número chutado foi: " + numeroChute)
   if(numeroChute < numeroEscolhido){
     alert("Errrrrrrrou, é maior")
     console.log("Errrrrrrrou, é maior")
     numeroChute = Number(prompt("Tente outro Número"))
   } else {
     console.log("Errrrrrrrou, é menor")
     alert("Errrrrrrrou, é menor")
     numeroChute = Number(prompt("Tente outro Número"))
   }
   numeroTentativas += 1
 }
 console.log("Acertou!!")
 console.log("O número de tentativas foi: " + numeroTentativas)

*/


//6)

/*============ APAGUE ESSE COMENTÁRIO PARA VER O RESULTADO DO CÓDIGO

const numeroEscolhido = Math.floor((Math.random() * 100) + 1)
console.log("Vamos Jogar")

let numeroChute = Number(prompt("Chute um Número"))
let numeroTentativas = 1

 while(numeroChute !== numeroEscolhido){
   console.log("O número chutado foi: " + numeroChute)
   if(numeroChute < numeroEscolhido){
     alert("Errrrrrrrou, é maior")
     console.log("Errrrrrrrou, é maior")
     numeroChute = Number(prompt("Tente outro Número"))
   } else {
     console.log("Errrrrrrrou, é menor")
     alert("Errrrrrrrou, é menor")
     numeroChute = Number(prompt("Tente outro Número"))
   }
   numeroTentativas += 1
 }
 console.log("Acertou!!")
 console.log("O número sorteado foi: " + numeroEscolhido)
 console.log("O número de tentativas foi: " + numeroTentativas)

*/


 // Não foi tão difícil e nem tão fácil, pois utilizando os links de referências disponibilizados no notion me ajudaram bastante, no fim eu já entendia qual parte do meu código era responsável por sortear o número, bastou eu entender o que o Math.floor e o Math.Random fazem e fazer a alteração no meu código.
 
 
 
 
 
 
 
