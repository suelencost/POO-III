const mongoose = require ('mongoose');

const mongoosePaginate = require ('mongoose-paginate');

const FuncionariosSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
        uppercase: true,
        minlength: 5,
        maxlength: 100
    },
    telefone:{
        type: Number,
        required: true,
        min: 10,
        max: 11
    },
    email:{
        type: String,
        required: true,
        minlength: 10,
        maxlength:100
    }

});

FuncionariosSchema.plugin(mongoosePaginate);

mongoose.model('Funcionarios', FuncionariosSchema);