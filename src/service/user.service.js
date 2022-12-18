const db = require('../../db.js');
const userModel = require('../../db/models/UserModel.js');


async function getUser(req, res) {
    const {id ,email, password,} = req.body;
    return await userModel.findOne({
        where: {
            id : 1
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

async function updateUser(req, res) {
    const { id, newusername, newemail, newphone, newpassword, newaddress } = req.body;

    return await userModel.update({
        nome: newusername,
        e_mail: newemail,
        telefone: newphone,
        senha: newpassword,
        endereco: newaddress,
        admin: false
    }, {
        where: {
            id
        }
    });
}




module.exports = { getUser, createUser };


