const express = require('express');
var router = express.Router();

var controller = require('../controllers/login');

router.post('/', controller.incluir)
router.get('/', controller.listar)

module.exports = router;