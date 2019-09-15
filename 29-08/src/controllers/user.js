const mongoose = require('mongoose');

const Usuario = mongoose.model('User');

module.exports = {
    async insert(req, res) {
        const usuarios = await Usuario.create(req.body);
        return res.json(usuarios);
    },
    async index(req, res) {
        const { page } = req.query;
        const usuarios = await Usuario.paginate({}, { page, limit: 3 });
        return res.json(usuarios);
    },
    async detalis(req, res) {
        const users = await Usuario.findById(req, perams.id);
        return res.json(users);
    },
    async update(req, res) {
        const users = await Usuario.findById(req, perams.id, req.body, { new: true });
        return res.json(users);
    },
    async delete(req, res) {
        const users = await Usuario.findById(req, perams.id);
        return res.json(users);
    }
}