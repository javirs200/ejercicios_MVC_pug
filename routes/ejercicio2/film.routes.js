const film = require('express').Router();
const filmController = require('../../controllers/ejercicio2/film.controller');

film.get('/',filmController.getTitle);

film.post('/',filmController.getTitleWithPost);

module.exports = film;