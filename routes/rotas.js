const { Router } = require('express');

const { rotasCategorias } = require('./rotasCategorias');

const { rotasProdutos} = require('./rotasProdutos');

const { rotasEditoras} = require('./rotasEditoras');

const { login } = require('../controllers/segurancaController');

const rotas = new Router();

// rota para o login
rotas.route('/login').post(login);

rotas.use(rotasCategorias);
rotas.use(rotasProdutos);
rotas.use(rotasEditoras);

module.exports = rotas;