const express = require('express');
const router = express.Router();
const product_detailsController = require('../controller/product_details.controller');

router.get('/', product_detailsController.getProductDetails);

module.exports = router;