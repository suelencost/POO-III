const mongoose = require('mongoose');

const Usuario = mongoose.model('Post');

module.exports = {
    async insert(req, res) {
        const pots = await Post.create(req.body);
        return res.json(posts);
    },
    async index(req, res) {
        const { page } = req.query;
        const posts = await Post.paginate({}, { page, limit: 3 });
        return res.json(posts);
    }
}