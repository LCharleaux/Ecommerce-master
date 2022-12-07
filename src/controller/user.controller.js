const User = require('../../db/models/Usermodel.js');
const userServices = require('../service/user.service.js');

async function showUserPage(req, res) {
  const user = await userServices.getUser(req, res);
  res.render('user', { user });
}

module.exports = {showUserPage};
