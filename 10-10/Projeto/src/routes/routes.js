const express = require('express');
const UsuarioController = require('../controllers/usuarioController');
const eventoController = require('../controllers/eventoController');
const router = express.Router();

router.get('/usuarios', UsuarioController.SearchAll);
router.get('/usuarios/:id', UsuarioController.SearchOne);
router.post('/usuarios', UsuarioController.Insert);
router.put('/usuarios/:id', UsuarioController.Update);
router.delete('/usuarios/:id', UsuarioController.Delete);

router.get('/evento', eventoController.SearchAll);
router.get('/evento/:id', eventoController.SearchOne);
router.post('/evento', eventoController.Insert);
router.put('/evento/:id', eventoController.Update);
router.delete('/evento/:id', eventoController.Delete);

module.exports = router;