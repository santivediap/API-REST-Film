const express = require('express')
const filmsRouter = express.Router()
const checkApiKey = require('../middlewares/auth_api_key')
const filmsController = require("../controllers/filmController")

// http://localhost:3000/api/film/:title
filmsRouter.get('/:title?', filmsController.getFilm)
filmsRouter.get('/search/:keyword', filmsController.getFilms)
filmsRouter.post('/', checkApiKey, filmsController.createFilm)
filmsRouter.put('/', checkApiKey, filmsController.editFilm)
filmsRouter.delete('/:title?', checkApiKey, filmsController.deleteFilm)

module.exports = filmsRouter;