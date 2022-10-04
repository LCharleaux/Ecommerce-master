async function showCartPage(req, res) {
    res.render('cart', { title: 'Cart' });
}

module.exports = {showCartPage};