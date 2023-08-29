const { getProdutosDB } = require('../usecases/produtoUseCases')

const getProdutos = async (request, response) => {
    await getProdutosDB()
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
            status: 'error',
            message: 'Erro ao consultar as produtos: ' + err
        }));
}

module.exports = {
   getProdutos
}
