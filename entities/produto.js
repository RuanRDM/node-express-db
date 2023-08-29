class Produto {
    constructor(
        codigo,
        nome,
        descricao,
        quantidadeEstoque,
        ativo,
        valor,
        dataCadastro,
        categoriaCodigo,
        categoriaNome
    ) {
        this.codigo = codigo;
        this.nome = nome;
        this.descricao = descricao;
        this.quantidadeEstoque = quantidadeEstoque;
        this.ativo = ativo;
        this.valor = valor;
        this.dataCadastro = dataCadastro;
        this.categoriaCodigo = categoriaCodigo;
        this.categoriaNome = categoriaNome;
    }
}

module.exports = Produto;
