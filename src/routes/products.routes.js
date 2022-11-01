const express = require('express');
const router = express.Router();
const productController = require('../controller/product.controller');
const upload = require('../../db/config/configMulter');

router.post('/create', upload.single("image"), productController.createProduct);
router.get('/list-all', productController.showProductsPage);
router.get('/product-details', productController.showProductDetailsPage);
router.get('/create', productController.showNewProductPage);
router.get('/my-products', productController.showMyProductsPage);

module.exports = router;