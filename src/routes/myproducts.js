const express = require('express');
const router = express.Router();
const myproductsController = require('../controller/myproducts.controller');

router.get('/', myproductsController.showMyProductsPage);

module.exports = router;