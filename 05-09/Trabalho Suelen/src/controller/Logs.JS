const mongoose = require('mongoose');

const logs = mongoose.model('Logs');

module.exports = {
    async insert(req, res) {
        const logs = await Logs.create(req.body);
        return res.json(Logs);
    },
    async index(req, res) {
        const { page } = req.query;
        const logs = await Logs.paginate({}, { page, limit: 3 });
        return res.json(Logs);
    },
    async detalis(req, res) {
        const logss = await Logs.findById(req, perams.id);
        return res.json(Logss);
    },
    async update(req, res) {
        const logss = await Logs.findById(req, perams.id, req.body, { new: true });
        return res.json(Logs);
    },
    async delete(req, res) {
        const logss = await Logs.findById(req, perams.id);
        return res.json(Logs);
    }
}