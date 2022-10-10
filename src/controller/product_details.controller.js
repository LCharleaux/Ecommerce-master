async function getProductDetails(req, res) {
    res.render('product_details', { title: 'Product Details' });
}

module.exports = {getProductDetails};