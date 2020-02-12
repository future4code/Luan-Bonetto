var AUTHORS;
(function (AUTHORS) {
    AUTHORS["LUAN_BONETTO"] = "Luan Bonetto";
    AUTHORS["ANONIMO"] = "Anonimo";
})(AUTHORS || (AUTHORS = {}));
var post1 = {
    author: AUTHORS.LUAN_BONETTO,
    text: "Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. In elementis mé pra quem é amistosis quis leo. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis."
};
var post2 = {
    author: AUTHORS.ANONIMO,
    text: "Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Interagi no mé, cursus quis, vehicula ac nisi. Quem manda na minha terra sou euzis! Leite de capivaris, leite de mula manquis sem cabeça."
};
var post3 = {
    author: AUTHORS.LUAN_BONETTO,
    text: "Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Suco de cevadiss deixa as pessoas mais interessantis. Paisis, filhis, espiritis santis."
};
var post4 = {
    author: AUTHORS.ANONIMO,
    text: "Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Diuretics paradis num copo é motivis de denguis. Si num tem leite então bota uma pinga aí cumpadi! Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis."
};
var post5 = {
    author: AUTHORS.ANONIMO,
    text: "Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Leite de capivaris, leite de mula manquis sem cabeça. Quem manda na minha terra sou euzis!"
};
var listPosts = [post1, post2, post3, post4, post5];
var filterPosts = function (posts, author) {
    var postListFilter = posts.filter(function (post) {
        return post.author === author;
    });
    return postListFilter;
};
var result = filterPosts(listPosts, AUTHORS.ANONIMO);
console.log(result);
