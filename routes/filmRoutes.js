const express = require('express');
const filmRouter = express.Router();
const filmsController = require("../controllers/filmController");

// http://localhost:3000/api/film/:title
filmRouter.get('/:title?', checkApiKey, filmsController.getFilm);