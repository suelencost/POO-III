const Sequelize = require('sequelize');

const sequelize = require('../database/database');

const Usuario = sequelize.define("usuario",{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    senha: {
        allowNull: false,
        type: Sequelize.STRING(16),
        validate: {
            len: [8, 16]
        }
    },
    cidade: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    estado: {
        allowNull: false,
        type: Sequelize.STRING(2),
        validate: {
            len: [2, 2]
        }
    }
});
module.exports = Usuario; 