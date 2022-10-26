const userServices = require('../service/user.service.js');

async function showLoginPage(req, res) {
    res.render('login', { title: 'Login' });
}

async function showHomePage(req, res) {

    console.log("ENTROUUU");
    console.log(req.body);
    const user = await userServices.getUser(req, res);
    console.log(user);
    if(user) {
        res.render('index', { title: 'Home' });
    }
}

module.exports = {showLoginPage, showHomePage};
