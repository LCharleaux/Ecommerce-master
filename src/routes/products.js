const express = require('express');
const router = express.Router();
const productsController = require('../controller/products.controller');


router.get('/', productsController.showProductsPage);

module.exports = router;