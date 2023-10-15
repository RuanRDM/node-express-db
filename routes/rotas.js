const { Router } = require('express');

const { rotasEditoras} = require('./rotasEditoras');

const { rotasLivros} = require('./rotasLivros');

const { login } = require('../controllers/segurancaController');

const rotas = new Router();

// rota para o login
rotas.route('/login').post(login);

rotas.use(rotasEditoras);
rotas.use(rotasLivros);

module.exports = rotas;