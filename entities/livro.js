class Livro {
    constructor(codigo, titulo, autor, preco, descricao, editora, editora_nome) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.autor = autor;
        this.preco = preco;
        this.descricao = descricao;
        this.editora = editora;
        this.editora_nome = editora_nome;
    }
}

module.exports = Livro;
