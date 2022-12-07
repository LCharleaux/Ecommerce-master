const productService = require('../service/product.service');


async function showCartPage(req, res) {
    res.render('cart', { title: 'Cart' });
}


async function addToCart(req, res) {
    const productId = req.query.productId;
    const product = await productService.getProductById(productId);
    const cart = await cartModel.getCart(req, res);
    cart.save(product);
    res.redirect('/cart');
}
    

module.exports = {showCartPage, addToCart};