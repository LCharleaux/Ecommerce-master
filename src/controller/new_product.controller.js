const newProductServices = require('../service/newProduct.service.js');

async function showNewProductPage(req, res) {
    res.render('new_product', { title: 'New Product' });
}

async function addProduct(req, res) {
    console.log("ENTROUUU");
    try{
    const product = await newProductServices.addNewProduct(req, res);
    console.log(product);
    if(product) {  
        console.log("Produto cadastrado");
        res.render('index', { title: 'Home' });
    }else{
        console.log("Produto não cadastrado");
        res.render('new_product', { title: 'New Product' });
    }
    }catch(err){
    console.log(err);
    }

}

module.exports = {showNewProductPage, addProduct};