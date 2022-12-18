const User = require('../../db/models/Usermodel.js');
const userServices = require('../service/user.service.js');

async function showUserPage(req, res) {
  const user = await userServices.getUser(req, res);
  res.render('user', { user });
}


async function getUser(req, res) {
  const { id } = req.params;

  return await User.findOne({
    where: {
      id,
    },
  });

}

module.exports = {showUserPage};
