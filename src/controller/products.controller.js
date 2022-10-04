async function showProductsPage(req, res) {
    res.render('products', { title: 'Products' });
}

module.exports = {showProductsPage};