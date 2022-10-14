async function showNewProductPage(req, res) {
    res.render('new_product', { title: 'New Product' });
}

module.exports = {showNewProductPage};