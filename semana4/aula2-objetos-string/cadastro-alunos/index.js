function cadastrar(){
    pessoa = {
        nome: document.getElementById("nome-cadastro").value,
        idade: document.getElementById("idade-cadastro").value,
        email: document.getElementById("email-cadastro").value
    }

    let i = 1


    if(pessoa.nome === ""){
        alert("Você precisa digitar um nome")
    }else if(pessoa.idade <= "0" || pessoa.idade === ""){
        alert("Você precisa digitar uma idade")
    }else if(pessoa.email === ""){
        alert("Você precisa digitar um e-mail")
    }else{
        document.getElementById("caixa-todo-conteudo").innerHTML += ('<div id="aluno-' + (i++) + '"' +  'class="caixa-inscritos">' + '<p>' + 'Nome: ' + pessoa.nome + '</p>' + '<p>' + 'Idade: ' + pessoa.idade + '</p>' + '<p>' + 'E-mail: ' + pessoa.email + '</p>' + '<button onclick="apagarAluno()">Apagar</button>' + '</div>')
        document.getElementById('nome-cadastro').value=''
        document.getElementById('idade-cadastro').value=''
        document.getElementById('email-cadastro').value=''
        alert("Cadastro de aluno criado com sucesso")
    }

}

function limparCadastros(){
    document.getElementById('caixa-todo-conteudo').remove()
    document.getElementById('container').innerHTML += ('<div id="caixa-todo-conteudo"></div>')
}

// function apagarAluno(){
//     document.getElementById("aluno-1").innerHTML = ""
// }