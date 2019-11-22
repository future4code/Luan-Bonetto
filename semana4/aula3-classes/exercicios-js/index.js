// 3)

// const quantidadeDeNumerosPares = 3
// let i = 0

// while(i < quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i++
// }

//---------------------------------------------------------------

//4)
// class Triangulo {
//     constructor(lado1, lado2, lado3){
//         this.lado1 = lado1
//         this.lado2 = lado2
//         this.lado3 = lado3
//     }
// }

// const triangulo1 = new Triangulo(10, 20, 30)

// function tipoDeTriangulo(){
//     if(triangulo1.lado1 === triangulo1.lado2 && triangulo1.lado1 === triangulo1.lado3 && triangulo1.lado2 === triangulo1.lado3){
//         console.log("É um triângulo equilátero")
//     }else if(triangulo1.lado1 === triangulo1.lado2 || triangulo1.lado1 === triangulo1.lado3 || triangulo1.lado2 === triangulo1.lado3){
//         console.log("É um triângulo isóceles")
//     }else{
//         console.log("É um triângulo escaleno")
//     }
// }
// tipoDeTriangulo()


//-----------------------------------------------------------------------------------------------

//5)

// class Numeros {
//     constructor(numero1, numero2){
//         this.numero1 = numero1
//         this.numero2 = numero2
//     }
// }

// const defineNumeros = new Numeros(10, 10)
// console.log("Entrada: ", defineNumeros.numero1, "e ", defineNumeros.numero2)

// function qualEhMaior() {
//     if(defineNumeros.numero1 > defineNumeros.numero2){
//         console.log("Saída:")
//         console.log("O maior é ", defineNumeros.numero1)
//     }else{
//         console.log("Saída:")
//         console.log("O maior é ", defineNumeros.numero2)
//     }
// }

// function ehDivisivel(){
//     if(defineNumeros.numero1 % defineNumeros.numero2 === 0){
//         console.log(defineNumeros.numero1, " É divisivel por", defineNumeros.numero2)
//     }else{
//         console.log(defineNumeros.numero1, " Não é divisivel por", defineNumeros.numero2)
//     }

//     if(defineNumeros.numero2 % defineNumeros.numero1 === 0){
//         console.log(defineNumeros.numero2, " É divisivel por", defineNumeros.numero1)
//     }else{
//         console.log(defineNumeros.numero2, " Não é divisivel por", defineNumeros.numero1)
//     }
// }

// function diferencaEntre(){
//     let diferenca = 0
//     if(defineNumeros.numero1 > defineNumeros.numero2){
//     diferenca = defineNumeros.numero1 - defineNumeros.numero2
//         console.log("A diferença entre eles é: ", diferenca)
//     } else{
//         diferenca = defineNumeros.numero2 - defineNumeros.numero1
//         console.log("A diferença entre eles é: ", diferenca)
//     }
// }
// qualEhMaior()
// ehDivisivel()
// diferencaEntre()



