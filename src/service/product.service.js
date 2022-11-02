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


async function getProducts(req, res) {
    console.log("ENTROU NO GET PRODUCTS");
    return await ProductModel.findAll();
}


async function getProductById(productId) {
    return await ProductModel.findOne({
        where: {
            id: productId
        }
    });
}

async function deleteProduct(productId) {
    console.log("ENTROU NO DELETE PRODUCT");
    return await ProductModel.destroy({
        where: {
            id: productId
        }
        
    });
    
}


module.exports = {addNewProduct, getProducts, getProductById, deleteProduct};