enum AUTHORS {
    LUAN_BONETTO = "Luan Bonetto",
    ANONIMO = "Anonimo",
}

type post = {
    author: AUTHORS,
    text: string,
}

const post1: post = {
    author: AUTHORS.LUAN_BONETTO,
    text: "Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. In elementis mé pra quem é amistosis quis leo. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis."
}

const post2: post = {
    author: AUTHORS.ANONIMO,
    text: "Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Interagi no mé, cursus quis, vehicula ac nisi. Quem manda na minha terra sou euzis! Leite de capivaris, leite de mula manquis sem cabeça."
}

const post3: post = {
    author: AUTHORS.LUAN_BONETTO,
    text: "Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Suco de cevadiss deixa as pessoas mais interessantis. Paisis, filhis, espiritis santis."
}

const post4: post = {
    author: AUTHORS.ANONIMO,
    text: "Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Diuretics paradis num copo é motivis de denguis. Si num tem leite então bota uma pinga aí cumpadi! Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis."
}

const post5: post = {
    author: AUTHORS.ANONIMO,
    text: "Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Leite de capivaris, leite de mula manquis sem cabeça. Quem manda na minha terra sou euzis!"
}

const listPosts: post[] = [post1, post2, post3, post4, post5]

const filterPosts = (posts: post[], author?: string): post[] => {
    const postListFilter: post[] = posts.filter((post) => {
        return post.author === author
    })
    return postListFilter
}

const result: post[] = filterPosts(listPosts, AUTHORS.ANONIMO)
console.log(result)