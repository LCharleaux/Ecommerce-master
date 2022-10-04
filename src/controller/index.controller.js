async function showHomePage(req, res) {
    res.render('index', { title: 'Home' });
}

module.exports = {showHomePage};