let { Schema, model } = require('mongoose')

// Model - schema
let userSchema = new Schema({
    fullname: {
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
    password: {
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