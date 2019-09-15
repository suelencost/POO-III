const Sequelize = require('sequelize');

const sequelize = require('../database/database');

const User = sequelize.define("user", {
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
    datanascimento: {
        allowNull: false,
        type: Sequelize.DATE()
    },
    ativo: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaltvalue: true
    },
    cidade: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [2, 100]
        }
    },
    estado: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [2, 100]
        }
    }
});
module.exports = User;