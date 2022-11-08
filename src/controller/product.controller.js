const productService = require('../service/product.service');

async function showProductsPage(req, res) {
    console.log("ENTROU NO SHOW PRODUCTS PAGE");
    const products = await productService.getProducts(req, res);
    console.log("PASSOU AQQQQQQ");
    res.render('products', {products: products});
    console.log("SAIU DO SHOW PRODUCTS PAGE");
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

async function deleteProduct(req, res) {
    console.log("ENTROU NO DELETE PRODUCT");
    const productId = req.query.productId;
    console.log(productId);
    const product = await productService.deleteProduct(productId);
    console.log("PASSOU AQQQQQQ");
    if(product) {
        console.log("Produto deletado");
        res.redirect('/product/my-products');
    }else{
        console.log("Produto não deletado");
        res.redirect('/product/my-products');
    }
    console.log("SAIU DO DELETE PRODUCT");
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

async function showEditProductPage(req, res) {
    console.log("ENTROU NO SHOW EDIT PRODUCT PAGE");
    const { productId } = req.query;
    console.log(productId);
    const product = await productService.getProductById(productId);
    res.render('edit_product', {product: product});
    console.log("SAIU DO SHOW EDIT PRODUCT PAGE");
}

async function editProduct(req, res) {
    console.log("ENTROU NO EDIT PRODUCT");
    const { productId } = req.query;
    const product = await productService.updateProduct(productId, req, res);
    console.log("PASSOU AQQQQQQ");
    if(product) {
        console.log("Produto editado");
        res.redirect('/product/my-products');
    }else{
        console.log("Produto não editado");
        res.redirect('/product/my-products');
    }
    console.log("SAIU DO EDIT PRODUCT");
}





module.exports = {showProductsPage, showNewProductPage, createProduct, showMyProductsPage, showProductDetailsPage, deleteProduct, showEditProductPage, editProduct};