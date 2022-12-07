const productModel = require('../models/Productmodel.js');
const cartModel = require('../models/Cartmodel.js');


async function addToCart(req, res) {
    const productId = req.query.productId;
    const product = await productModel.getProductById(productId);
    const cart = await cartModel.getCart(req, res);
    cart.save(product);
    res.redirect('/cart');
}



module.exports = {addToCart};