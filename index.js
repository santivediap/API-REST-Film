const express = require('express')
const filmRoutes = require('./routes/filmRoutes')
require('dotenv').config();
const app = express();
const port = 3000

app.use(express.json())
app.use('/api/film', filmRoutes);


app.listen(port, () => {
    console.log(`Servidor funcionando en https://localhost:${port}`)
})