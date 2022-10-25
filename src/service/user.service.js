const db = require('../../db.js');
const userModel = require('../../db/models/UserModel.js');


async function getUser(req, res) {
    const { email, password } = req.body;

    return await userModel.findOne({
        where: {
            email: email,
            password: password
        }
    });

}

module.exports = { getUser };