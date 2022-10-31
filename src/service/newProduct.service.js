const db = require('../../db.js');
const ProductModel = require('../../db/models/ProductModel.js');

async function addNewProduct(req, res) {
    console.log("ENTROUUU ADD NEW PRODUCT");
    const { prodName, price, description, categorie } = req.body;
    const image = req.file.filename;
    console.log(image);
    return await ProductModel.create({
        nome: prodName,
        preco: price.replace(",", "."),
        descricao: description,
        categoria: categorie,
        caminho_imagem: image
    });
}

module.exports = {addNewProduct};