const dotenv = require('dotenv');
const node_fetch = require('node-fetch')

dotenv.config()

let baseUrl = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}`

async function getFilmDetailByTitle(title){
    let url = baseUrl + `&t=${title}`
    let res = await fetch(url)
                .then(response => response.json())
                .then(data => data);
    if(res.Response == 'False'){
        return null
    }else{
        return res
    }    
}

module.exports = getFilmDetailByTitle