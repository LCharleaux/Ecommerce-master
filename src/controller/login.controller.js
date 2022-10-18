async function showLoginPage(req, res) {
    res.render('login', { title: 'Login' });
}

async function showHomePage(req, res) {
    var username = req.body;

    console.log("ENTROUUU");
    console.log(username);
}

module.exports = {showLoginPage, showHomePage};

