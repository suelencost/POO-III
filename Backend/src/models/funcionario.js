const Sequelize = require('sequelize');

const sequelize = require('../database/database');

const Projeto = require('./projeto');

const Funcionario = sequelize.define("funcionario",{
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
    matricula: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    salario: {
        allowNull: false,
        type: Sequelize.DOUBLE
    },
    dataNascimento: {
        allowNull: false,
        type: Sequelize.DATE
    },
    cpf: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
});

Projeto.hasOne(Funcionario, {
    foreignKey: {
        name: 'idProjeto',
        allowNull: false,
        unique: true
    }
})

module.exports = Funcionario; 