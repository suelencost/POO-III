const express = require('express');
const FuncionarioController = require('../controllers/funcionarioController');
const ProjetoController = require('../controllers/projetoController');
const router = express.Router();

router.get('/funcionarios', FuncionarioController.SearchAll);
router.get('/funcionarios/:id', FuncionarioController.SearchOne);
router.post('/funcionarios', FuncionarioController.Insert);
router.put('/funcionarios/:id', FuncionarioController.Update);
router.delete('/funcionarios/:id', FuncionarioController.Delete);

router.get('/projetos', ProjetoController.SearchAll);
router.get('/projetos/:id', ProjetoController.SearchOne);
router.post('/projetos', ProjetoController.Insert);
router.put('/projetos/:id', ProjetoController.Update);
router.delete('/projetos/:id', ProjetoController.Delete);

module.exports = router;