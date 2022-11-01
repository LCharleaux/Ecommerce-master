const myproductsService = require('../service/myproducts.service');


async function showMyProductsPage(req, res) {
    console.log("ENTROU NO SHOW MY PRODUCTS PAGE");
    const products = await myproductsService.getProducts(req, res);
    console.log(products);
    res.render('myproducts', {products: products});
    console.log("SAIU DO SHOW MY PRODUCTS PAGE");
}

module.exports = {showMyProductsPage};