const express = require('express');
const controllerPainel = require('./controllers/PainelController');

const routes = express.Router();

routes.get('/List',controllerPainel.List);

module.exports = routes;