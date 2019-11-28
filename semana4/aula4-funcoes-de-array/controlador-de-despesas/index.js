class Despesa {
    constructor(valor, tipo, descricao){
        this.valor = valor
        this.tipo = tipo
        this.descricao = descricao
    }
}

let arrayDeDespesas = []
let arrayFiltroDespesa = []

function criarDespesa(){
    const valorDespesa = Number(document.getElementById("valor").value)
    const tipoDespesa = document.getElementById("tipo").value
    const descricaoDespesa = document.getElementById("descricao").value    
    const listaDespesa = document.getElementById("lista")

    if(valorDespesa === "" || valorDespesa === 0 || tipoDespesa === "" || descricaoDespesa === ""){
        alert("Está faltando preencher algum campo!")
    }else{
        const novaDespesa = new Despesa(valorDespesa, tipoDespesa, descricaoDespesa)
        
        arrayDeDespesas.push(novaDespesa)
        console.log(arrayDeDespesas)
        document.getElementById("valor").value = ""
        document.getElementById("tipo").value = ""
        document.getElementById("descricao").value = ""

        listaDespesa.innerHTML = ""
        arrayDeDespesas.forEach((item, i, arr) => {
            return listaDespesa.innerHTML += '<div class="div-lista"><h3> Descrição:</h3> <p>' + item.descricao + '</p> <h3> Tipo: </h3> <p>' + item.tipo + '</p> <h3> Valor:</h3>  <p>R$ ' + item.valor + '</p></div>'
        } )
    }

    extrato()
}

function filtrarDespesa(){
    const tipoFiltro = document.getElementById("tipo-detalhe").value
    const valorMinimoFiltro = document.getElementById("valor-minimo").value
    const valorMaximoFiltro = document.getElementById("valor-maximo").value
    const listaDespesa = document.getElementById("lista")

    if (valorMinimoFiltro === "" ||valorMaximoFiltro === "" || tipoFiltro === ""){
        alert("Está faltando preencher algum campo!")
    } else{
        arrayFiltroDespesa = arrayDeDespesas.filter((item) => {
            return item.tipo == tipoFiltro
        })

        arrayFiltroDespesa = arrayFiltroDespesa.filter((item) => {

            return item.valor >= valorMinimoFiltro
        })

        arrayFiltroDespesa = arrayFiltroDespesa.filter((item) => {

            return item.valor <= valorMaximoFiltro
        })



        console.log(arrayFiltroDespesa)

        listaDespesa.innerHTML = ""
        arrayFiltroDespesa.forEach((item, i, arr) => {
            return listaDespesa.innerHTML += '<div class="div-lista"><h3> Descrição:</h3> <p>' + item.descricao + '</p> <h3> Tipo: </h3> <p>' + item.tipo + '</p> <h3> Valor:</h3>  <p>R$ ' + item.valor + '</p></div>'
        })

        document.getElementById("valor-minimo").value = ""
        document.getElementById("tipo-detalhe").value = ""
        document.getElementById("valor-maximo").value = ""
    }
}

function limparFiltro() {
    const listaDespesa = document.getElementById("lista")


    listaDespesa.innerHTML = ""
    arrayDeDespesas.forEach((item, i, arr) => {
        return listaDespesa.innerHTML += '<div class="div-lista"><h3> Descrição:</h3> <p>' + item.descricao + '</p> <h3> Tipo: </h3> <p>' + item.tipo + '</p> <h3> Valor:</h3>  <p>R$ ' + item.valor + '</p></div>'
    } )
}

function extrato(){
    const extrato = document.getElementById("extrato")
    let valorExtrato = arrayDeDespesas.reduce((total, dinheiro) => parseInt(total) + parseInt(dinheiro.valor), 0)
    extrato.innerHTML = '<h1> Extrato Valor Total R$ ' + valorExtrato + '</h1>'
}

function ordenarLista(){
    const listaDespesa = document.getElementById("lista")


    arrayDeDespesas.sort(function(a, b) {
        return parseInt(a.valor) > parseInt(b.valor) ? -1 : parseInt(a.valor) < parseInt(b.valor) ? 1 : 0
    })
    console.log(arrayDeDespesas)
    listaDespesa.innerHTML = ""
    arrayDeDespesas.forEach((item, i, arr) => {
        return listaDespesa.innerHTML += '<div class="div-lista"><h3> Descrição:</h3> <p>' + item.descricao + '</p> <h3> Tipo: </h3> <p>' + item.tipo + '</p> <h3> Valor:</h3>  <p>R$ ' + item.valor + '</p></div>'
    })
}