const operacao = process.argv[2]
const valor1 = Number(process.argv[3])
const valor2 = Number(process.argv[4])
let valorTotal = 0
const corSucesso = '\033[0;34m'
const corErro = '\033[0;31m'

if((valor1 >= 0 || valor1 <= 0) && (valor2 >= 0 || valor2 <= 0)){
    switch (operacao) {
        case "add":
            valorTotal = valor1 + valor2
            resultado()
            break
        case "sub":
            valorTotal = valor1 - valor2
            resultado()
            break
        case "mult":
            valorTotal = valor1 * valor2
            resultado()
            break
        case "div":
            valorTotal = valor1 / valor2
            resultado()
            break
        default: 
            console.log(`${corErro}✘ É preciso passar uma operação válida`)
            break
    }
}else{
    console.log(`${corErro}✘ É preciso passar dois parâmetros como por exemplo:\n$ node exercicio1 'valor1' 'valor2'`)
}

function resultado(){
    console.log(`${corSucesso}✔ Resposta: ${valorTotal}`)
}