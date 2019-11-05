/****** Exercícios de interpretação de código ******/

/*
  1) O código pede para digitar um número, esse número está como string, em seguida ele pega o valor digitado e converte de string para number.

  Então ele entra em condição, Se o número digitado for divisivel por dois ou seja, se dividir um número e ele chegar a 0 ele irá considerar que passou no teste, se não ele vai considerar que não passou no teste.
*/

/* 
  2) a) O código pede para digitar o nome de alguma fruta e a armazena em uma variável como uma string, ele também define uma variável Number para o preço.
  Então o código verifica nos cases se há o nome da fruta que foi digitado e dá o seu preço, caso não tiver o nome da fruta ele irá retornar um preço de R$5,00. 

  b)O Preço da fruta Maçã é R$ 2.25

  c)R$ 24.44

  d)O preço da fruta  Pêra  é  R$  5
*/

/*
  3) Irá resultar em um erro (ReferenceError: mensagem is not defined
    at /script.js:38:15). Pois a variável mensagem está definida dentro do escopo do primeiro if, para fazer o console.log funcionar ele tem que também estar dentro desse escopo. EX:
    
    const numero1 = prompt("Digite o primeiro número.")
    const numero2 = prompt("Digite o próximo número?")

    if(numero1 > 0 && numero2 > 0) {
      let mensagem
      if(numero1 > numero2) {
        mensagem = "Número 1 é maior que o 2!"
      } else {
        mensagem = "Número 1 é menor ou igual ao 2!"
      }
      console.log(mensagem)
    }

*/


/****** Exercícios de escrita de código ******/
// 1) a) ele exibe os números iguais um do lado do outro (obs: eu tinha feito o código de uma forma diferente, pode ser que dessa forma dê outro resultado)
// b) não deu nenhum resultado

/* --------> APAGUE ESSE COMENTÁRIO PARA TESTAR O CÓDIGO

    const numero1 = Number(prompt("Digite o primeiro número."))
    const numero2 = Number(prompt("Digite o segundo número."))
    const numero3 = Number(prompt("Digite o terceiro número."))

    if(numero1 > numero2 && numero1 > numero3 && numero2 > numero3){
      console.log(numero1 + " " + numero2 + " " + numero3)
    }else if(numero1 > numero2 && numero1 > numero3 && numero3 > numero2) {
      console.log(numero1 + " " + numero3 + " " + numero2)
    }
     else if(numero2 > numero1 && numero2 > numero3 && numero1 > numero3){
      console.log(numero2 + " " + numero1 + " " + numero3)
    } else if(numero2 > numero1 && numero2 > numero3 && numero3 > numero1){
      console.log(numero2 + " " + numero3 + " " + numero1)
    } else if (numero3 > numero1 && numero3 > numero2 && numero1 > numero2){
      console.log(numero3 + " " + numero1 + " " + numero2)
    } else if (numero3 > numero1 && numero3 > numero2 && numero2 > numero1){
      console.log(numero3 + " " + numero2 + " " + numero1)
    } else {
      console.log("Erro! Você deve ao menos inserir um número diferente")
    }

  */


  //-------------------------------------------------------------

  // 2)a) link diagrama: https://imgur.com/slPSHYV
  
  /* --------> APAGUE ESSE COMENTÁRIO PARA TESTAR O CÓDIGO

  const possuiOssos = prompt("O Animal Possui Ossos Formando? [s/n]")
  
  if (possuiOssos === "s"){
    const possuiPelos = prompt("O Animal Possui Pelos? [s/n]")
    if (possuiPelos === "s"){
      const animalRacional = prompt("O Animal é Racional? [s/n]")
      if(animalRacional === "s"){
        console.log("É um ser Humano!")
      } else{
        console.log("Mamífero não Humano!")
      }
    } else{
      const possuiPenas = prompt("O Animal Possui Penas? [s/n]")
      if(possuiPenas === "s"){
        console.log("É uma Ave!")
      } else{
        const animalTerrestre = prompt("O Animal é Terrestre? [s/n]")
        if(animalTerrestre === "s"){
          const parteVidaAquatico = prompt("O Animal passa parte da vida em ambiente aquático? [s/n]")
          if(parteVidaAquatico === "s"){
            console.log("É um Anfíbio!")
          } else{
            console.log("É um Réptil!")
          }
        } else{
          console.log("É um Peixe!")
        }
      }
    }
  } else {
    console.log("É um Animal Invertebrado")
  }

*/

 //-------------------------------------------------------------

 //3)
/* --------> APAGUE ESSE COMENTÁRIO PARA TESTAR O CÓDIGO (CÓDIGO INCOMPLETO, AINDA PRETENDO COMPLETAR ELE)

 const nomeCompleto = prompt("Digite seu nome completo!")
 const tipoJogo = prompt("Indique o tipo de jogo IN para Internacional e DO para Doméstico")
 const etapaJogo = prompt("Indique a etapa do jogo SF para semi-final, DT para decisão de terceiro lugar e FI para final")
 const categoria = prompt("Escolha a categoria 1, 2, 3 ou 4")
 const quantidadeIngressos = prompt("Digite a quantidade de Ingressos!")

 console.log("---Dados da compra--- ")
 console.log(nomeCompleto)

 if(tipoJogo === "IN"){
   console.log("Internacional")

 } else if(tipoJogo === "DO"){
   console.log("Doméstico")
 }

 */



/*====== Meu Resumo do dia, pois não participei do Standup

Os exercícios realmente são um pouco complexo pra nós que estamos começando agora, mas acredito que seja questão de prática e que seja bom passar por essa experiência por agora pois com isso aprendemos com nossos erros e nos tornamos mais ágeis.
Sobre o diagrama, acho interessante esse tipo de preparação para pensar em como vai ser o código, cheguei a fazer uma matéria na faculdade chamada Modelagem de Dados em que pude perceber como pode ser a importante fazer diagramas e outros tipos de documentações antes de fazer um programa, pois assim facilita o desenvolvimento do mesmo e permite fazer manutenções futuras de maneira mais fácil.

*/