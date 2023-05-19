//Imports gerais
const express = require('express');
const app = express();
const atividadeRouter = require('./routers/atividadeRouter');
const eventoRouter = require('./routers/eventoRouter');

//Adição de middlewares
app.use(express.json());
app.use(atividadeRouter);
app.use(eventoRouter);

//Ouvinte de requisições
app.listen(process.env.PORT || 3000);