const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Projeto = sequelize.define("projeto", {
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
            len: [5, 100]
        }
    },
    area: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [5, 100]
        }
    },
    descricao: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [5, 100]
        }
    },
    dataCriacao: {
        allowNull: false,
        type: Sequelize.DATE
    },
    dataValidade: {
        allowNull: false,
        type: Sequelize.DATE
    }
});

module.exports = Projeto;