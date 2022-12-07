const express = require('express');
const router = express.Router();
const cartController = require('../controller/cart.controller');

router.post('/add', cartController.addToCart);
router.get('/', cartController.showCartPage);

module.exports = router;