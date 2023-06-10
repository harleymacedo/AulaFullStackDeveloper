//Import de roteador e model
const ProfessorRouter = require('express').Router()
const ProfessorSchema = require('../models/Professor')

//Rota para obter todas os professores
ProfessorRouter.get('/professor/todos', (req, res) => {
    try {
        const professores = ProfessorSchema.find({})
        res.json({professores: professores})
    } catch (error) {
        res.json({mensagem: 'Erro durante a consulta'})
    }
})

//Rota para obter professor por ID
ProfessorRouter.get('/professor/:id', (req, res) => {
    try {
        const professor = ProfessorSchema.findById(req.body.id)
        res.json({professor: professor})
    } catch (error) {
        res.json({mensagem: 'Erro durante a consulta'})
    }
})

//Rota para inserir novo professor
ProfessorRouter.post('/atividade', (req, res) => {
    try {
        res.json({mensagem: 'Procedimento realizado com sucesso'});
    } catch (error) {
        res.json({mensagem: 'Erro durante a consulta de atividades'});
    }
});

//Rota para atualizar atividade
ProfessorRouter.put('/atividade/:id', (req, res) => {
    try {
        res.json({mensagem: 'Procedimento realizado com sucesso'});
    } catch (error) {
        res.json({mensagem: 'Erro durante a consulta de atividades'});
    }
});

//Rota para exluir atividade
ProfessorRouter.delete('/atividade/:id', (req, res) => {
    try {
        res.json({mensagem: 'Procedimento realizado com sucesso'});
    } catch (error) {
        res.json({mensagem: 'Erro durante a consulta de atividades'});
    }
});

//Exportar módulo
module.exports = ProfessorRouter;