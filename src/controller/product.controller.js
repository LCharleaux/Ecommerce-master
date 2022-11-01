const productService = require('../service/product.service');

async function showProductsPage(req, res) {
    res.render('products', { title: 'Products' });
}

async function showNewProductPage(req, res) {
    res.render('new_product', { title: 'New Product' });
}

async function createProduct(req, res) {

    console.log("ENTROUUU");
    console.log(req.file.filename);
    try{
    const product = await productService.addNewProduct(req, res);
    console.log(product);
    if(product) {  
        console.log("Produto cadastrado");
        res.render('index', { title: 'Home' });
    }else{
        console.log("Produto não cadastrado");
        res.render('new_product', { title: 'New Product' });
    }
    }catch(err){
    console.log(err);
    }

}

async function showMyProductsPage(req, res) {
    console.log("ENTROU NO SHOW MY PRODUCTS PAGE");
    const products = await productService.getProducts(req, res);
    console.log("PASSOU AQQQQQQ");
    console.log(products);
    res.render('my_products', {products: products});
    console.log("SAIU DO SHOW MY PRODUCTS PAGE");
}

async function showProductDetailsPage(req, res) {
    const { productId } = req.query;
    const product = await productService.getProductById(productId);
    res.render('product_details', {product: product});
}

module.exports = {showProductsPage, showNewProductPage, createProduct, showMyProductsPage, showProductDetailsPage};