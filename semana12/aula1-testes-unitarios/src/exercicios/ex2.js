export function checaPalindromo(frase) {


    const novaFraseSemEspaço = frase.replace(/ /g,"")
    const novaFraseSemTraço = novaFraseSemEspaço.replace(/-/g,"")
    const novaFraseLowerCase = novaFraseSemTraço.toLowerCase()
    const novaFrase = novaFraseLowerCase

    if(novaFrase === novaFrase.split('').reverse().join('')){
        return true
    }else{
        false
    }
}

