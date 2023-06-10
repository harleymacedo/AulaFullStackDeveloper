const mongoose = require('mongoose')

const ProfessorSchema = mongoose.Schema({
    nome: String,
    titulo: String,
    area: String,
    email: String
})

module.exports = mongoose.model('Professor', ProfessorSchema)