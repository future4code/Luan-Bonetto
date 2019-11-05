import comprarCarta from './naoMexer.js'

// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// console.log("------------------Jogo Blackjack-------------------")


// console.log("Bem-vindo ao jogo de Blackjack!")


// const cartaU1 = comprarCarta()
// const cartaU2 = comprarCarta()
// const cartaPC1 = comprarCarta()
// const cartaPC2 = comprarCarta()

// if(confirm ("Quer iniciar uma nova rodada?")){

//   console.log("Usuário - cartas " + cartaU1.texto + " " + cartaU2.texto + " - pontuação " + (cartaU1.valor + cartaU2.valor))

//   console.log("Computador - cartas " + cartaPC1.texto + " " + cartaPC2.texto + " - pontuação " + (cartaPC1.valor + cartaPC2.valor))

//   if((cartaU1.valor + cartaU2.valor) > (cartaPC1.valor + cartaPC2.valor)){
//     console.log("O Usuário Venceu!")
//   } else if((cartaU1.valor + cartaU2.valor) < (cartaPC1.valor + cartaPC2.valor)){
//     console.log("O Computador Venceu!")
//   } else{
//     console.log("Empate!")
//   }
// } else{
//   console.log("O Jogo Acabou!")
// }