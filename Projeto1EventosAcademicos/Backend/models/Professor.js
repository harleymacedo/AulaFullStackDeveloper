const mongoose = require('mongoose')

const professor = mongoose.Schema({
    nome: String,
    titulo: String,
    area: String,
    email: String
})

module.exports = mongoose.model('Professor', professor)