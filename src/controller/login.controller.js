async function showLoginPage(req, res) {
    res.render('login', { title: 'Login' });
}

module.exports = {showLoginPage};