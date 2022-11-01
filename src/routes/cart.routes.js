const express = require('express');
const router = express.Router();
const cartController = require('../controller/cart.controller');


router.get('/', cartController.showCartPage);

module.exports = router;