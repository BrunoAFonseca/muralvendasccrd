const Sequelize = require('sequelize');
const sequelize = new Sequelize('ccrd', 'root', 'teste123',{
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

module.exports = sequelize;