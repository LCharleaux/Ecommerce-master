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
    productService.getProductById(req.body.productId).then((product) => {
        console.log(product);
        cartModel.Cart.create({
            id_produto: product.id
        }).then((cart) => {
            console.log(cart);
        }).catch((err) => {
            console.log(err);
        });
    }).catch((err) => {
        console.log(err);
    });
    


}




    

module.exports = {showCartPage, addToCart};