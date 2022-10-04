const express = require('express');
const router = express.Router();
const indexController = require('../controller/index.controller');


router.get('/', indexController.showHomePage);


module.exports = router;
