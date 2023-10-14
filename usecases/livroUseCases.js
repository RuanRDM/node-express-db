const { pool } = require('../config');
const Livro = require('../entities/livro')

const getLivrosDB = async () => {
    try {    
        const { rows } = await pool.query(`select l.codigo as codigo, l.titulo as titulo, l.autor as autor, l.preco as preco,
        l.descricao as descricao, l.editora as editora, e.nome as editora_nome
        from livros l
        join editoras e on l.editora = e.codigo
        order by l.codigo`);
        return rows.map((livro) => new Livro(livro.codigo, livro.titulo, livro.autor, livro.preco, 
            livro.descricao, livro.editora, livro.editora_nome));        
    } catch (err) {
        throw "Erro : " + err;
    }
}

const addLivroDB = async (body) => {
    try {   
        const { titulo, autor, preco, descricao, editora } = body; 
        const results = await pool.query(`INSERT INTO livros (titulo, autor, preco, descricao, editora) 
            VALUES ($1, $2, $3, $4, $5)
            returning codigo, titulo, autor, preco, descricao, editora`,
        [titulo, autor, preco, descricao, editora]);
        const livro = results.rows[0];
        return new Livro(livro.codigo, livro.titulo, livro.autor, livro.preco, 
            livro.descricao, livro.editora, "");
    } catch (err) {
        throw "Erro ao inserir o livro: " + err;
    }    
}

const updateLivroDB = async (body) => {
    try {   
        const { codigo, titulo, autor, preco, descricao, editora }  = body; 
        const results = await pool.query(`UPDATE livros set titulo = $2 , autor = $3, preco = $4, 
        descricao = $5, editora = $6 where codigo = $1 
        returning codigo, titulo, autor, preco, descricao, editora`,
        [codigo, titulo, autor, preco, descricao, editora]);        
        if (results.rowCount == 0){
            throw `Nenhum registro encontrado com o código ${codigo} para ser alterado`;
        }
        const livro = results.rows[0];
        return new Livro(livro.codigo, livro.titulo, livro.autor, livro.preco, 
            livro.descricao, livro.editora, "");
    } catch (err) {
        throw "Erro ao alterar o livro: " + err;
    }      
}

const deleteLivroDB = async (codigo) => {
    try {           
        const results = await pool.query(`DELETE FROM livros where codigo = $1`,
        [codigo]);
        if (results.rowCount == 0){
            throw `Nenhum registro encontrado com o código ${codigo} para ser removido`;
        } else {
            return "Livro removido com sucesso";
        }       
    } catch (err) {
        throw "Erro ao remover o livro: " + err;
    }     
}

const getLivroPorCodigoDB = async (codigo) => {
    try {           
        const results = await pool.query(`select l.codigo as codigo, l.titulo as titulo, l.autor as autor, l.preco as preco, 
        l.descricao as descricao, l.editora as editora, e.nome as editora_nome
        from livros l
        join editoras e on l.editora = e.codigo where l.codigo = $1`,
        [codigo]);
        if (results.rowCount == 0){
            throw "Nenhum registro encontrado com o código: " + codigo;
        } else {
            const livro = results.rows[0];
            return new Livro(livro.codigo, livro.titulo, livro.autor, livro.preco, 
                livro.descricao, livro.editora, "");
        }       
    } catch (err) {
        throw "Erro ao recuperar o livro: " + err;
    }     
}

module.exports = {
    getLivrosDB, addLivroDB, updateLivroDB, deleteLivroDB, getLivroPorCodigoDB
}
