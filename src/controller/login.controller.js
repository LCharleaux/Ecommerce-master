async function showLoginPage(req, res) {
    res.render('login', { title: 'Login' });
}

async function showHomePage(req, res) {

    console.log("ENTROUUU");
    console.log(req.body);
    res.render('index', { title: 'Home' });
}

module.exports = {showLoginPage, showHomePage};

