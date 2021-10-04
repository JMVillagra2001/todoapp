const express = require('express');
const router = express.Router({ mergeParams: true });

const todoController = require('../controllers/todo.controller');
const { verifyToken } = require('../utils/auth');

router.get('/', verifyToken, todoController.getAllById);

router.post('/', verifyToken, todoController.create);

router.delete('/:id', verifyToken, todoController.deleteById);

router.put('/:id', verifyToken, todoController.changeStatus);

module.exports = router;