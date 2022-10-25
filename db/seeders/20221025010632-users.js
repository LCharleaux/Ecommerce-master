'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert('usuario', [
      {
        nome: 'admin',
        e_mail: 'admin@admin',
        telefone: '00000000000',
        senha: 'admin',
        endereco: 'adminav',
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Luis',
        e_mail: 'Luis@user',
        telefone: '00000000001',
        senha: '123',
        endereco: 'LuisAV',
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Joao',
        e_mail: 'Joao@user',
        telefone: '00000000002',
        senha: '123',
        endereco: 'JoaoAV',
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Maria',
        e_mail: 'Maria@user',
        telefone: '00000000003',
        senha: '123',
        endereco: 'MariaAV',
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuario', null, {});
  }
};
