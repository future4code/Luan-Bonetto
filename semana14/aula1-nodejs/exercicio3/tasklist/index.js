const fs = require('fs')
const novaTarefa = `${process.argv[2]}\n`
const arquivo = "tarefas.txt"
const corSucesso = '\033[0;34m'
const corErro = '\033[0;31m'

if (novaTarefa === `${undefined}\n`) {
    console.log(`${corErro}✘ Você precisa digitar uma tarefa válida`)
} else {
    try {
        fs.appendFileSync(arquivo, novaTarefa, 'utf8')
        console.log(`${corSucesso}✔ Tarefa adicionada com sucesso!`)
    } catch (error) {
        console.error(error)
    }
}