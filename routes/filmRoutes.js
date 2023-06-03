const express = require('express');
const filmRouter = express.Router();
const checkApiKey = require('../middlewares/auth_api_key')
const filmsController = require("../controllers/filmController");

// http://localhost:3000/api/film/:title
filmRouter.get('/:title?', checkApiKey,  filmController.getFilm);
filmRouter.post('/', checkApiKey, filmController.createFilm);

module.exports = filmRouter;