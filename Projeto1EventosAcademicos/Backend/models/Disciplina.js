const mongoose = require('mongoose')

const disciplina = mongoose.Schema({
    nome: String,
    ch: Number,
})

module.exports = mongoose.model('Disciplina', disciplina)