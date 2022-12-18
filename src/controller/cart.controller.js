const productService = require('../service/product.service');
const cartModel = require('../../db/models/Cartmodel.js');
const productModel = require('../../db/models/Productmodel.js');


async function showCartPage(req, res) {
    console.log("ENTROU NO SHOW CART PAGE");
    const cart = await cartModel.getCart(req, res);
    console.log(cart);
    
    res.render('cart', { title: 'Cart' });
}


async function addToCart(req, res) {
    console.log("ENTROU NO ADD TO CART");
    const productId = req.body.productId;
    console.log(productId);
    const product = await productService.getProductById(productId);
    console.log(product);
    const cart = await cartModel.getCart(req, res);
    console.log(cart);
    cart.push(product);
    console.log("SAIU DO ADD TO CART");
    res.render('cart', {product: product});
}



    

module.exports = {showCartPage, addToCart};