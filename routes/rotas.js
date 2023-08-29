const { Router } = require('express');
const { rotasProdutos } = require('./rotasProdutos');      // Importe as rotas de produtos
const { rotasCategorias } = require('./rotasCategorias');

const rotas = new Router();

rotas.use(rotasCategorias);
rotas.use(rotasProdutos); 

module.exports = rotas;