const mongoose = require ('mongoose');

const mongoosePaginate = require ('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
        uppercase: true,
        minlength: 5,
        maxlength: 100
    },
    matricula:{
        type: Number,
        required: true,
        min: 2,
        max: 999999,
        unique: true
    },
    dataNascimento: {
        type: Date,
        required: true
    },
    ativo: {
        type:Boolean,
        default: true,
        required: true
    },
    userArrey: {
        type: [String]
    },
    endereco: {
        cidade: {
            type: String,
            require: true
        },
        estado: {
            type: String,
            required: true
        }
    },
    registro: {
        type: Date,
        default: Date.now
    }

});

UserSchema.plugin(mongoosePaginate);

mongoose.model('User', UserSchema);