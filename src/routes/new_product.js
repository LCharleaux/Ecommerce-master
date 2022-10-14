const express = require('express');
const router = express.Router();
const new_productController = require('../controller/new_product.controller');

router.get('/', new_productController.showNewProductPage);

module.exports = router;