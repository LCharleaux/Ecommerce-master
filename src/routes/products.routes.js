const express = require('express');
const router = express.Router();
const productController = require('../controller/product.controller');
const upload = require('../../db/config/configMulter');

router.post('/create', upload.single("image"), productController.createProduct);
router.post('/edit_product', upload.single("image"), productController.editProduct);
router.get('/list-all', productController.showProductsPage);
router.get('/product-details', productController.showProductDetailsPage);
router.get('/create', productController.showNewProductPage);
router.get('/my-products', productController.showMyProductsPage);
router.get('/delete', productController.deleteProduct);
router.get('/edit_product', productController.showEditProductPage);

module.exports = router;