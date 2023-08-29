const { pool } = require('../config');
const Categoria = require('../entities/categoria')
const Produto = require('../entities/produto');

const getProdutosDB = async () => {
    try {    
        const query = `
            SELECT p.codigo as codigo, p.nome as nome, p.descricao as descricao,
                p.quantidade_estoque as quantidade_estoque, p.ativo as ativo,
                p.valor as valor, to_char(p.data_cadastro,'YYYY-MM-DD') as data_cadastro,
                p.categoria as categoria, c.nome as categoria_nome
            FROM produtos p
            JOIN categorias c ON p.categoria = c.codigo
            ORDER BY p.codigo
        `;
        const { rows } = await pool.query(query);
        return rows.map((produto) => new Produto(
            produto.codigo, produto.nome, produto.descricao, produto.quantidade_estoque,
            produto.ativo, produto.valor, produto.data_cadastro, produto.categoria, produto.categoria_nome
        ));        
    } catch (err) {
        throw "Erro: " + err;
    }
}


module.exports = {
    getProdutosDB
}
