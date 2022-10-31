const db = require('../../db.js');
const productModel = require('../../db/models/ProductModel.js');

async function getProducts(req, res) {
    console.log("ENTROU NO GET PRODUCTS");
    return await productModel.findAll();
}
    



module.exports = { getProducts };