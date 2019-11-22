class Post {
    constructor(titulo, autor, conteudo){
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
    }
}

const arrayDePosts = []

function criaPost(){
    const tituloPost = document.getElementById("titulo").value
    const autorPost = document.getElementById("autor").value
    const conteudoPost = document.getElementById("conteudo").value
    const containerDePost = document.getElementById("container-dos-posts")

    const novoPost = new Post(tituloPost, autorPost, conteudoPost)
    console.log(novoPost.titulo, novoPost.autor, novoPost.conteudo)
    console.log(novoPost)
    

    containerDePost.innerHTML += criaElementoPost(novoPost.titulo, novoPost.autor, novoPost.conteudo)
    arrayDePosts.push(novoPost)
    console.log(arrayDePosts)
    document.getElementById("titulo").value = ""
    document.getElementById("autor").value = ""
    document.getElementById("conteudo").value = ""

}

function criarPostEnter(ev){
 if(ev.key === "Enter"){
    criaPost()
 }
}

function mostraTodosPosts(){

}

function criaElementoPost(titulo, autor, conteudo){
    return '<div class="caixaElementoPost">' + '<p>Titulo: ' + titulo + '</p>' + '<p>Autor: ' + autor + '</p>' + '<p>Conteudo: ' + conteudo + '</p>' +  '</div>'
}