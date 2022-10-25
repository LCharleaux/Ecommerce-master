'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      e_mail: {
        type: Sequelize.STRING(62),
        allowNull: false
      },
      telefone:{
        type: Sequelize.STRING(20),
        allowNull: false
      },
      senha: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      endereco:{
        type: Sequelize.STRING(100),
        allowNull: false
      },
      admin:{
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuario');
  }
};
