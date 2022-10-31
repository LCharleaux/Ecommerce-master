const express = require('express');
const router = express.Router();
const new_productController = require('../controller/new_product.controller');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) =>  {
        cb(null, 'product_images');
    },
    filename: (req, file, cb) =>{
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.single("image"), new_productController.addProduct);
router.get('/', new_productController.showNewProductPage);


module.exports = router;