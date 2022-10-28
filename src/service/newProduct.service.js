const db = require('../../db.js');
const ProductModel = require('../../db/models/ProductModel.js');

async function addNewProduct(req, res) {
    const { prodName, price, description, categorie } = req.body;

    return await ProductModel.create({
        nome: prodName,
        preco: price.replace(",", "."),
        descricao: description,
        categoria: categorie
    });
}

module.exports = {addNewProduct};