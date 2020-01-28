export function sorteiaNumero(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    const resultado = Math.floor(Math.random() * (max - min)) + min

    console.log(resultado)
}

//  retorna um número inteiro entre dois valores definidos.
//  O valor não poderá ser menor que min (ou do próximo inteiro maior que min, caso min não seja inteiro),
//  e será menor (mas não igual) a max.