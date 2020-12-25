function imprimirNumerosOrdemCrescente(numero){
    if(numero >= 0){
        imprimirNumerosOrdemCrescente(numero - 1)
        console.log(numero)
    }
}

imprimirNumerosOrdemCrescente(10)

function imprimirNumerosOrdemDecrescente(numero) {
    if (numero >= 0) {
      console.log(numero);
      imprimirNumerosOrdemDecrescente(numero - 1);
    }
};

imprimirNumerosOrdemDecrescente(10)
