const Sequelize = require('sequelize');
const sequelize = require('../database/database');
const Usuario = require('./usuario');

const Evento = sequelize.define("evento", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    titulo: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [5, 100]
        }
    },
    dataEvento: {
        allowNull: false,
        type: Sequelize.DATE()
    },
    descricao: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [5, 100]
        }
    }
});

Usuario.hasMany(Evento, {
    foreignKey: {
        name: 'idUsuario',
        allowNull: false
    }
})

module.exports = Evento;