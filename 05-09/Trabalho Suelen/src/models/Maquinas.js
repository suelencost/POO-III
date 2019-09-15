const mongoose = require ('mongoose');

const mongoosePaginate = require ('mongoose-paginate');

const MaquinasSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
        uppercase: true,
        minlength: 5,
        maxlength: 100
    },
    descricao:{
        type: String,
        min: 1,
        max: 100
    },
    setor:{
        type: String,
        required: true,
        minlength: 2,
        maxlength:50
    },
    idFuncionario:{
        type: mongoose.Schema.Types.ObjectId, ref:'Funcionarios'
    }    

});

MaquinasSchema.plugin(mongoosePaginate);

mongoose.model('Maquina', MaquinasSchema);