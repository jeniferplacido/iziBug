let { Schema, model } = require('mongoose')

// Model - schema
let userSchema = new Schema({
    token: {
        type: Schema.Types.ObjectId,
        unique: true,
        required: true,
        auto: true,
        index: true
      },
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        index: true
    },
    emailValido: {
        type: Boolean,
        default: false,
        required: true
    },
    senha: {
        type: String,
        required: true,
        select: false,
    },
    dataNascimento: {
        type: String,
    },
    tipoDeUser: {
        type: String,
        default: 'user'
    }
},
{
  timestamps: true
})
let userModel = model('User', userSchema);
module.exports = { userModel, userSchema }