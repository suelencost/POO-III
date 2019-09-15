const express = require('express');

const routes = express.Router();

const userController = require ('../controllers/user');
const postController = require ('../controllers/post');

routes.get('/users', userController.index);
routes.post('/users', userController.insert);
routes.get('/users/:id', userController.detalis);
routes.put('/users/:id', userController.update);
routes.delete('/users/:id', userController.delete);

routes.get('/post', userController.index);
routes.post('/post', userController.insert);

module.exports = routes;