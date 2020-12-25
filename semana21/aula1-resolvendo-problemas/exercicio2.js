function compressao(text){

    const caracteres = []
    let ultimoCaractere
    let contadorDeCaractere = 0
    let index = 1

    for( const char of text ){

        if (ultimoCaractere === undefined){
            ultimoCaractere = char
        }
        
        if(char === ultimoCaractere){
            contadorDeCaractere++
        }else if( char !== ultimoCaractere){
            if(contadorDeCaractere === 1){
                caracteres.push(ultimoCaractere)
            }else{
                caracteres.push(`${ultimoCaractere}${contadorDeCaractere}`)
            }
            contadorDeCaractere = 1
        }

        if( index === text.length ){
            if(contadorDeCaractere !== 1){
                caracteres.push(`${char}${contadorDeCaractere}`)
            }else{
                caracteres.push(char)
            }
            
        }

        ultimoCaractere = char
        index++
    }
    
    const novaString = caracteres.join('')

    if(text.length <= novaString.length){
        return text
    }else{
        return novaString
    }

}

console.log(compressao("accurate"))
