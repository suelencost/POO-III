const Sequelize = require('sequelize');
const sequelize = require('../database/database');
const User = require('../models/user');

const Posts = sequelize.define('posts', {
    id: {
        allowNull: false,
        auttoincrement: true,
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
    descricao: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [5, 100]
        }
    }
});

User.hasMany(Posts, {
    foreignkey: {
        name: 'idusuario',
        allowNull: false
    }
})