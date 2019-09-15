const mongoose = require('mongoose');

const Funcionarios = mongoose.model('Funcionarios');

module.exports = {
    async insert(req, res) {
        const funcionarios = await Funcionarios.create(req.body);
        return res.json(funcionarios);
    },
    async index(req, res) {
        const { page } = req.query;
        const funcionarios = await Funcionarios.paginate({}, { page, limit: 3 });
        return res.json(funcionarios);
    },
    async detalis(req, res) {
        const funcionarios = await Funcionarios.findById(req, params.id);
        return res.json(funcionarioss);
    },
    async update(req, res) {
        const funcionarios = await Funcionarios.findById(req, params.id, req.body, { new: true });
        return res.json(funcionarios);
    },
    async delete(req, res) {
        const funcionarios = await Funcionarios.findById(req, params.id);
        return res.json(funcionarios);
    }
}