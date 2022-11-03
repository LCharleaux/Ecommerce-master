const db = require('../../db.js');
const userModel = require('../../db/models/UserModel.js');


async function getUser(req, res) {
    const { email, password } = req.body;

    return await userModel.findOne({
        where: {
            e_mail: email,
            senha: password
        }
    });

}

async function createUser(req, res) {
    const { newusername, newemail, newphone, newpassword, newaddress } = req.body;

    return await userModel.create({
        nome: newusername,
        e_mail: newemail,
        telefone: newphone,
        senha: newpassword,
        endereco: newaddress,
        admin: false
    });
}

module.exports = { getUser, createUser };


