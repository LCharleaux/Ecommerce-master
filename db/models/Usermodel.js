const DataTypes = require('sequelize');
const sequelize = require('../../db.js');

const User = sequelize.define('usuario',  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    e_mail: {
      type: DataTypes.STRING(62),
      allowNull: false
    },
    telefone:{
      type: DataTypes.STRING(20),
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    endereco:{
      type: DataTypes.STRING(100),
      allowNull: false
    },
    admin:{
      type: DataTypes.BOOLEAN,
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

  module.exports = User;