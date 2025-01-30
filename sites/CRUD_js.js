const minitwiter = {
    usuario: [{
        usename: 'Vyctor Carvalho'
    }],
    posts: [{
        id: 1,
        owner: 'Vyctor Carvalho',
        post: 'meu primeiro twiter'
    }]
};
//criar
function criarPost(dados){
    minitwiter.posts.push({
        id: minitwiter.posts.length + 1,  
        owner: dados.owner,
        post: dados.post
    });
};
criarPost({owner:'Vyctor Carvalho', post:'segundo twiter'});
console.log(minitwiter.posts);

//read
function lerPost(){
    return minitwiter.posts;
};
console.log(lerPost());

//update
function updatePostContent(id, novoContent){
    const atualizado = lerPost().find((post) => {
        return post.id === id;
    });
    atualizado.content = novoContent;
};
updatePostContent(1,'novo conteudo do post');
console.log(lerPost());

//delete
function deletePost(id) {
    const deletar = lerPost().filter((postsAtual) => {
        return postsAtual.id !== id;
    });
    console.log(deletar)
};
deletePost();
