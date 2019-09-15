const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const PostSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true
    },
    idUser: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }
});

PostSchema.plugin(mongoosePaginate);

mongoose.model('Post', PostSchema);