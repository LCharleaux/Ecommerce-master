const Sequelize = require('sequelize');
const sequelize = new Sequelize('market_games', 'root', 'Sanafry123', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;