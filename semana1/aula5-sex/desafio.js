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
console.log("----------------------DESAFIO----------------------")

console.log("Bem-vindo ao jogo de Blackjack!")

let cartaU1 = comprarCarta()
let cartaU2 = comprarCarta()
let cartaPC1 = comprarCarta()
let cartaPC2 = comprarCarta()

let cartasUsuario = [cartaU1, cartaU2]
let cartasComputador = [cartaPC1, cartaPC2]


let posCartaU1 = cartasUsuario.indexOf(cartaU1)
let posCartaPC1 = cartasUsuario.indexOf(cartaPC1)
// cartasUsuario.splice(posCartaU2, 1)
{

}

if(confirm("Quer iniciar uma nova rodada?")){

if(cartaU1.valor === 11 && cartaU2.valor === 11){

  while(cartaU1.valor === 11 && cartaU2.valor === 11){
  cconsole.log("Usuário - cartas " + cartaU1.texto + " " + cartaU2.texto)
  console.log("Computador - cartas " + cartaPC1.texto + " " + cartaPC2.texto)
  cartasUsuario.splice(posCartaU1, 2)
  cartaU1 = comprarCarta()
  cartaU2 = comprarCarta()
  cartasUsuario.push(cartaU1, cartaU2)
  console.log("O Usuario tirou dois ases. Será feito um novo sorteio de cartas!")
  console.log("Usuário - cartas " + cartaU1.texto + " " + cartaU2.texto)
  console.log("Computador - cartas " + cartaPC1.texto + " " + cartaPC2.texto)

  }

  console.log("Usuário - cartas " + cartaU1.texto + " " + cartaU2.texto + " - pontuação " + (cartaU1.valor + cartaU2.valor))

  console.log("Computador - cartas " + cartaPC1.texto + " " + cartaPC2.texto + " - pontuação " + (cartaPC1.valor + cartaPC2.valor))

  if((cartaU1.valor + cartaU2.valor) > (cartaPC1.valor + cartaPC2.valor)){
    console.log("O Usuário Venceu!")
  } else if((cartaU1.valor + cartaU2.valor) < (cartaPC1.valor + cartaPC2.valor)){
    console.log("O Computador Venceu!")
  } else{
    console.log("Empate!")
  }


}else if(cartaPC1.valor === 11 && cartaPC2.valor === 11){

  console.log("Usuário - cartas " + cartaU1.texto + " " + cartaU2.texto)
  console.log("Computador - cartas " + cartaPC1.texto + " " + cartaPC2.texto)
  cartasComputador.splice(posCartaPC1, 2)
  let cartaPC1 = comprarCarta()
  let cartaPC2 = comprarCarta()
  cartasComputador.push(cartaPC1, cartaPC2)

}else{

  console.log("Usuário - cartas " + cartaU1.texto + " " + cartaU2.texto + " - pontuação " + (cartaU1.valor + cartaU2.valor))

  console.log("Computador - cartas " + cartaPC1.texto + " " + cartaPC2.texto + " - pontuação " + (cartaPC1.valor + cartaPC2.valor))

  if((cartaU1.valor + cartaU2.valor) > (cartaPC1.valor + cartaPC2.valor)){
    console.log("O Usuário Venceu!")
  } else if((cartaU1.valor + cartaU2.valor) < (cartaPC1.valor + cartaPC2.valor)){
    console.log("O Computador Venceu!")
  } else{
    console.log("Empate!")
  }

}

}else{
  console.log("O Jogo Acabou!")
}

//ainda irei terminar




  