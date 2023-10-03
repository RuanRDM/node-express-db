const { Router } = require('express');
const { rotasProdutos } = require('./rotasProdutos');      // Importe as rotas de produtos
const { rotasCategorias } = require('./rotasCategorias');

const rotas = new Router();

const {login} = require('../controllers/segurancaController');

//Rota para o request do token jwt
rotas.route('/login').post(login);

rotas.use(rotasCategorias);
rotas.use(rotasProdutos); 

module.exports = rotas;