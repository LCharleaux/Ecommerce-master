const DataTypes = require('sequelize');
const sequelize = require('../../db.js');

const Cart = sequelize.define('carrinhos',  {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    id_produto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
    }
});

async function getCart(req, res) {
    const cart = await Cart.findAll();
    return cart;
}

module.exports = {Cart, getCart};


