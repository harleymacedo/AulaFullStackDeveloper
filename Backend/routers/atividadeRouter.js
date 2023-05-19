//Import de roteador
const atividadeRouter = require('express').Router();

//Rota para obter todas as atividade
atividadeRouter.get('/atividade/todos', (req, res) => {
    try {
        res.json({atividades: []});
    } catch (error) {
        res.json({mensagem: 'Erro durante a consulta de atividades'});
    }
});

//Rota para obter atividade por ID
atividadeRouter.get('/atividade/:id', (req, res) => {
    try {
        res.json({atividade: {}});
    } catch (error) {
        res.json({mensagem: 'Erro durante a consulta de atividades'});
    }
});

//Rota para inserir nova atividade
atividadeRouter.post('/atividade', (req, res) => {
    try {
        res.json({mensagem: 'Procedimento realizado com sucesso'});
    } catch (error) {
        res.json({mensagem: 'Erro durante a consulta de atividades'});
    }
});

//Rota para atualizar atividade
atividadeRouter.put('/atividade/:id', (req, res) => {
    try {
        res.json({mensagem: 'Procedimento realizado com sucesso'});
    } catch (error) {
        res.json({mensagem: 'Erro durante a consulta de atividades'});
    }
});

//Rota para exluir atividade
atividadeRouter.delete('/atividade/:id', (req, res) => {
    try {
        res.json({mensagem: 'Procedimento realizado com sucesso'});
    } catch (error) {
        res.json({mensagem: 'Erro durante a consulta de atividades'});
    }
});

//Exportar módulo
module.exports = atividadeRouter;