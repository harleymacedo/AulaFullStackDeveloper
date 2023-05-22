//Import de roteador
const eventoRouter = require('express').Router();

//Rota para obter todos os eventos
eventoRouter.get('/evento/todos', (req, res) => {
    try {
        res.json({eventos: []});
    } catch (error) {
        res.json({mensagem: 'Erro durante a consulta de eventos'});
    }
});

//Export de módulo
module.exports = eventoRouter;