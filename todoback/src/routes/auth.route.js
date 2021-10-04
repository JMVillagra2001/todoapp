const express = require('express');
const router = express.Router({ mergeParams: true });

const authController = require('../controllers/auth.controller');

router.post('/login', authController.login);

router.post('/', authController.create);

module.exports = router;