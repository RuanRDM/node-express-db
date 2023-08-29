const { Router } = require('express');

const { getProdutos } = require('../controllers/produtoController');

const rotasProdutos = new Router();

rotasProdutos.route('/produto')
   .get(getProdutos)


module.exports = { rotasProdutos };