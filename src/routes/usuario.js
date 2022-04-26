const express = require('express');
var router = express.Router();

var controller = require('../controllers/usuario');

router.post('/', controller.incluir)

module.exports = router;