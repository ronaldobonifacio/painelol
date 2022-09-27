const sequelize = require('sequelize');

const database = new sequelize('producao','vendas','asavendas',
{
    dialect:'mssql', host:'192.168.1.242', port: 1433
});

database.sync();

module.exports = database;