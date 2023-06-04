const express = require('express');
const filmRoutes = require('./routes/filmRoutes')
const {error404, error500} = require('./middlewares/errors')
require('dotenv').config()
const app = express()
const port = 3000

app.use(express.json())
app.use('/api/film', filmRoutes)

app.use(error404)
app.use(error500)


app.listen(port, () => {
    console.log(`Servidor funcionando en https://localhost:${port}`)
})