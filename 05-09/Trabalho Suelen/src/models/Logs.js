const mongoose = require ('mongoose');

const mongoosePaginate = require ('mongoose-paginate');

const LogsSchema = new mongoose.Schema({
    codErro:{
        type: String      
    },
    descricaoProblema:{
        type: String,
        min: 1,
        max: 100
    },
    dataHora:{
        type: Date,
        required: true
    },
    idMaquina:{
        type: mongoose.Schema.Types.ObjectId, ref:'Maquinas'
    }    

});

LogsSchema.plugin(mongoosePaginate);

mongoose.model('Logs', LogsSchema);