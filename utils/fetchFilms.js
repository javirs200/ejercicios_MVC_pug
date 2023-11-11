const dotenv = require('dotenv');

dotenv.config();

const apiKey = process.env.API_KEY;

async function getFilm(id=""){
    console.log('llamada api ');
    let response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${id}`);
    let film = await response.json();
    return film;
};

module.exports = getFilm;