// 
const { Schema, model } = require('mongoose')

// Model - schema
let drogasSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    nomeGenerico: {
        type: String,
    },
    nomeAlternativo: {
        type: String,
    },
    descricao: {
        type: String,
        required: true,
    },
    indicacoes: {
        type: String,
    },
    contraIndicacoes: {
        type: String,
    },
    gravidez: {
        type: String,
    },
    riscosBeneficios: {
        type: String,
    },
    alertas: {
        type: String,
    },
    acoes: {
        type: String,
    },
    ram: {
        type: String,
    },
    maisInfos: {
        type: String,
    }
},
{
  timestamps: true
})
const drogasModel = model('Droga', drogasSchema);

module.exports = { drogasModel, drogasSchema }