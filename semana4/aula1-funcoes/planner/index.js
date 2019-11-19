function addTarefa() {
    let valorTarefa = document.getElementById("tarefa").value
    let valorDiaSemana = document.getElementById("dia-semana").value

    if(valorDiaSemana === "Segunda"){
        document.getElementById("segunda").innerHTML += ('<p>' + valorTarefa + '</p>')
    } else if(valorDiaSemana === "Terça"){
        document.getElementById("terca").innerHTML += ('<p>' + valorTarefa + '</p>')
    } else if(valorDiaSemana === "Quarta"){
        document.getElementById("quarta").innerHTML += ('<p>' + valorTarefa + '</p>')
    } else if(valorDiaSemana === "Quinta"){
        document.getElementById("quinta").innerHTML += ('<p>' + valorTarefa + '</p>')
    } else if(valorDiaSemana === "Sexta"){
        document.getElementById("sexta").innerHTML += ('<p>' + valorTarefa + '</p>')
    }else if(valorDiaSemana === "Sabado"){
        document.getElementById("sabado").innerHTML += ('<p>' + valorTarefa + '</p>')
    } else if(valorDiaSemana === "Domingo"){
        document.getElementById("domingo").innerHTML += ('<p>' + valorTarefa + '</p>')
    }
}