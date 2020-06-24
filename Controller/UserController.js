const express = require('express');

var router = express.Router()
var UserService = require('../Service/UserService');

router.get('/:name', UserService.GetByName);
router.post('/create', UserService.CreateUtilizador)


module.exports = router;