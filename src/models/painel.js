const  sequelize = require('sequelize')
const database = require('../db');
const shema = "localhost";

class Painel extends sequelize.Model{}


Painel.init(
    {
        ZW7_NPEDIT:
        {
            type: sequelize.STRING,
        },
        ZW7_FORNE:
        {
            type: sequelize.STRING
        },
        ZW7_DTIMP:
        {
            type: sequelize.STRING  
        }
    },
    {
        sequelize : database, modelName: 'ZW7010', shema
    }

)

module.exports = Painel;