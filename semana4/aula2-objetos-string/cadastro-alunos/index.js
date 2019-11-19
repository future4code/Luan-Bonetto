function cadastrar(){
    pessoa = {
        nome: document.getElementById("nome-cadastro").value,
        idade: document.getElementById("idade-cadastro").value,
        email: document.getElementById("email-cadastro").value
    }

    document.getElementById("container").innerHTML += ('<div class="caixa-inscritos">' + '<p>' + 'Nome: ' + pessoa.nome + '</p>' + '<p>' + 'Idade: ' + pessoa.idade + '</p>' + '<p>' + 'E-mail: ' + pessoa.email + '</p>' + '</div>')
    document.getElementById('nome-cadastro').value=''
    document.getElementById('idade-cadastro').value=''
    document.getElementById('email-cadastro').value=''
}