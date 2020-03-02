enum IDADE {
    PRE = 'Pré-história',
    ANTIGA = 'Idade Antiga',
    MEDIA = 'Idade Média',
    MODERNA = 'Idade Moderna',
    CONTEMPORANEA = 'Idade Contemporânea',
}

type tempoHistorico = {
    ano: number,
    sigla: string,
}

const defineTempoHistorico = (ano: number, sigla?: string): string => {

    let idade: string = ""

    if (sigla === "AC") {
        switch (ano) {
            case 100000:
                return idade = IDADE.PRE
                break
            case 4000:
                return idade = IDADE.ANTIGA
                break
            default: console.log("Você passou um ano errado")
        }
    } else if (sigla === "DC" || sigla === undefined) {
        switch (ano) {
            case 476:
                return idade = IDADE.MEDIA
                break
            case 1453:
                return idade = IDADE.MODERNA
                break
            case 1789:
                return idade = IDADE.CONTEMPORANEA
                break
            default: console.log("Você passou um ano errado")
        }
    }else{
        console.log("Você digitou uma sigla errada")
    }
    return idade
}

const resultado = defineTempoHistorico(476, "")
console.log(resultado)