'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('produtos', [
      {
        nome: 'FIFA 22',
        descricao: 'FIFA 22 é um jogo de futebol.',
        preco: 200,
        categoria: 'Xbox One',
        createdAt: new Date(),
        updatedAt: new Date(),
        caminho_imagem: 'image-1671199604554.jpg'
      },
      {
        nome: 'God of War',
        descricao: 'God of War é um jogo eletrônico de ação-aventura.',
        preco: 80,
        categoria: 'PS4',
        createdAt: new Date(),
        updatedAt: new Date(),
        caminho_imagem: 'image-1671320024383.png'
      },
      {
        nome: 'The Last of Us Part II',
        descricao: 'The Last of Us Part II é um jogo eletrônico de ação-aventura.',
        preco: 100,
        categoria: 'PS4',
        createdAt: new Date(),
        updatedAt: new Date(),
        caminho_imagem: 'image-1671126455889.jpg'
      },
      {
        nome: 'Zelda: Breath of the Wild',
        descricao: 'The Legend of Zelda: Breath of the Wild é um jogo eletrônico de ação-aventura.',
        preco: 150,
        categoria: 'Nintendo Switch',
        createdAt: new Date(),
        updatedAt: new Date(),
        caminho_imagem: 'image-1671314413930.jpg'
      },
      {
        nome: 'Horizon Forbidden West',
        descricao: 'Horizon Forbidden West é um jogo eletrônico de ação-aventura.',
        preco: 80,
        categoria: 'PS4',
        createdAt: new Date(),
        updatedAt: new Date(),
        caminho_imagem: 'image-1671320687305.jpg'
      }]);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('produtos', null, {});
  }
};
