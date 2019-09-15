const mongoose = require('mongoose');

const Maquinas = mongoose.model('Maquinas');

module.exports = {
    async insert(req, res) {
        const maquinas = await Maquinas.create(req.body);
        return res.json(maquinas);
    },
    async index(req, res) {
        const { page } = req.query;
        const maquinas = await Maquinas.paginate({}, { page, limit: 3 });
        return res.json(maquinas);
    },
    async detalis(req, res) {
        const maquinass = await Maquinas.findById(req, perams.id);
        return res.json(Maquinass);
    },
    async update(req, res) {
        const maquinass = await Maquinas.findById(req, perams.id, req.body, { new: true });
        return res.json(Maquinas);
    },
    async delete(req, res) {
        const maquinass = await Maquinas.findById(req, perams.id);
        return res.json(Maquinas);
    }
}