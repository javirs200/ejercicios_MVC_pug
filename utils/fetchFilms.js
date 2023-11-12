const dotenv = require('dotenv');
const node_fetch = require('node-fetch')

dotenv.config();

const apiKey = process.env.API_KEY;

async function getFilm(id=""){
    try {
        console.log('llamada api ');
        let response = await node_fetch.fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${id}`)
        .catch((error)=>{
            console.log('internal catch error' , error);
        });
        let film = await response.json();
        return film;
    } catch (error) {
        console.log('error llamada api' , error)
    }
    
};

module.exports = getFilm;