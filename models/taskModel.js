// 
const { Schema, model } = require('mongoose')

// Model - schema
let tasksSchema = new Schema({

    idChamado: {
        type: Number,
        auto: true,
        default: 0,
    },
    assunto: {
        type: String,
        required: true,
    },
    mensagem: {
        type: String,
        required: true,
    },
    prioridade: {
        type: String,
        required: true,
    },
    setor: {
        type: String,
        required: true,
    },
    solicitante: {
        type: String,
        required: true,
        default: 'NomeDoUsuário'
    },
    status: {
        type: String,
        default: 'Aberto',
    }
},
{
  timestamps: true
})
const tasksModel = model('Task', tasksSchema);

module.exports = { tasksModel, tasksSchema }