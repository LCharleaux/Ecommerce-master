const productModel = require('../models/Productmodel.js');
const cartModel = require('../models/Cartmodel.js');
const productServices = require('../service/product.service.js');


async function addToCart(req, res) {
    const productId = req.body.productId;
    console.log(productId);
    const product = await productServices.getProductById(productId);
    console.log(product);
    const cart = await cartModel.getCart(req, res);
    console.log(cart);
    cart.push(product);
    res.redirect('/cart');
}


async function showCartPage(req, res) {

    const cart = await cartModel.getCart(req, res);
    console.log(cart);
    res.render('cart', { title: 'Cart', cart: cart });
}





module.exports = {addToCart};