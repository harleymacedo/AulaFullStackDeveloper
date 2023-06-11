//Imports gerais
const express = require('express')
const app = express()
const atividadeRouter = require('./routers/atividadeRouter')
const eventoRouter = require('./routers/eventoRouter')
const professorRouter = require('./routers/professorRouter')
const dotenv = require('dotenv').config()

//Adição de middlewares
app.use(express.json())
app.use(atividadeRouter)
app.use(eventoRouter)
app.use(professorRouter)

//Ouvinte de requisições
app.listen(process.env.PORT || 3000)