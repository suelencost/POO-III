const express = require('express');

const routes = express.Router();

const FuncionariosController = require ('../controller/Funcionarios');
const LogsController = require ('../controllers/Logs');
const MaquinasController = require ('../controllers/Maquinas');


routes.get('/Funcionarios', FuncionariosController.index);
routes.post('/Funcionarios', FuncionariosController.insert);
routes.get('/Funcionarios/:id', FuncionariosController.detalis);
routes.put('/Funcionarios/:id', FuncionariosController.update);
routes.delete('/Funcionarios/:id', FuncionariosController.delete);

routes.get('/Logs', LogsController.index);
routes.post('/Logs', LogsController.insert);
routes.get('/Logs/:id', LogsController.detalis);
routes.put('/Logs/:id', LogsController.update);
routes.delete('/Logs/:id', LogsController.delete);

routes.get('/Maquinas', MaquinasController.index);
routes.post('/Maquinas', MaquinasController.insert);
routes.get('/Maquinas/:id', MaquinasController.detalis);
routes.put('/Maquinas/:id', MaquinasController.update);
routes.delete('/Maquinas/:id', MaquinasController.delete);

module.exports = routes;