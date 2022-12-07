let cart = [];

module.exports = class Cart {
    static save(product) {
        if(cart[product.id]) {
            cart[product.id].qty++;
        }else{
            cart[product.id] = {productData: product, qty: 1};
        }
    }
}

async function getCart(req, res) {
    if(!req.session.cart) {
        req.session.cart = new Cart();
    }
    return req.session.cart;
}

module.exports = {getCart};
