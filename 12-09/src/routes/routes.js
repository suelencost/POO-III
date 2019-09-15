const express = require('express');
const UserController = require('../controllers/userController');
const PostsController = require('../controllers/postsController');
const router = express.Router();

router.get('/user', UserController.SearchAll);
router.get('/user/:id', UserController.SearchOne);
router.post('/user', UserController.Insert);
router.put('/user/:id', UserController.Update);
router.delete('/user/:id', UserController.Delete);

router.get('/posts', UserController.SearchAll);
router.get('/posts/:id', UserController.SearchOne);
router.post('/posts', UserController.Insert);
router.put('/posts/:id', UserController.Update);
router.delete('/posts/:id', UserController.Delete);

module.exports = router;