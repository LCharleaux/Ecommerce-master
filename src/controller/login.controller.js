const userServices = require('../service/user.service.js');

async function showLoginPage(req, res) {
    res.render('login', { title: 'Login' });
}

async function showHomePage(req, res) {

    console.log("ENTROUUU");
    console.log(req.body);
    try{
    const user = await userServices.getUser(req, res);
    console.log(user);
    if(user) {  
        console.log("Usuario encontrado");
        res.render('index', { title: 'Home' });
    }else{
        console.log("Usuario não encontrado");
        res.render('login', { title: 'Login' });
    }
    }catch(err){
    console.log(err);
    }
}

module.exports = {showLoginPage, showHomePage};
