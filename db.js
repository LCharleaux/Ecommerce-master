const Sequelize = require('sequelize');
const sequelize = new Sequelize('market_games', 'root', 'pssword', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;