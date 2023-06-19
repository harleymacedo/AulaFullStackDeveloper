//Import de roteador e model
const professorRouter = require('express').Router()
const mongoose = require('mongoose')
const professor = require('../models/professor')

//Rota para obter todas os professores
professorRouter.get('/professor/todos', async (req, res) => {
    try {
        const conectado = await mongoose.connect(process.env.DB_STR_CON)
        const professoresBuscados = await professor.find()
        res.json({professores: professoresBuscados})
    } catch (error) {
        res.json({mensagem: 'Erro durante a consulta', erro: true, erro: error.message})
    }
})

//Rota para obter professor por ID
professorRouter.get('/professor/:id', async (req, res) => {
    try {
        await mongoose.connect(process.env.DB_STR_CON)
        const professorBuscado = await professor.findById(req.params.id)
        res.json({professor: professorBuscado})
    } catch (error) {
        res.json({mensagem: 'Erro durante a consulta'})
    }
})

//Rota para obter professor por Nome
professorRouter.get('/professor/nome/:nome', async (req, res) => {
    try {
        console.log('Vai consultar por nome')
        await mongoose.connect(process.env.DB_STR_CON)
        const nome = req.params.nome
        console.log(nome)
        const professorBuscado = await professor.find({nome: {$regex: /nome/} })
        res.json({professor: professorBuscado})
    } catch (error) {
        res.json({mensagem: 'Erro durante a consulta'})
    }
})

//Rota para inserir novo professor
professorRouter.post('/professor', async (req, res) => {
    try {
        await mongoose.connect(process.env.DB_STR_CON)
        const professorNovo = req.body
        await professor.create(professorNovo)
        res.json({mensagem: 'Procedimento realizado com sucesso'})
    } catch (error) {
        res.json({mensagem: 'Erro durante a consulta'})
    }
});

//Rota para atualizar atividade
professorRouter.put('/atividade/:id', (req, res) => {
    try {
        res.json({mensagem: 'Procedimento realizado com sucesso'});
    } catch (error) {
        res.json({mensagem: 'Erro durante a consulta de atividades'});
    }
});

//Rota para exluir atividade
professorRouter.delete('/atividade/:id', (req, res) => {
    try {
        res.json({mensagem: 'Procedimento realizado com sucesso'});
    } catch (error) {
        res.json({mensagem: 'Erro durante a consulta de atividades'});
    }
});

//Exportar módulo
module.exports = professorRouter;