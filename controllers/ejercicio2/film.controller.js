let getFilm = require('../../utils/fetchFilms')

const getTitle = async (req, res) =>{

    console.log("llega peticion con titulo -> " , req.query.title);

    let titulo = req.query.title

    if(titulo){

        let details = JSON.stringify(await getFilm(titulo))
        
        if(details != null){
            console.log('renderizando planitlla');
            res.status(200).render('./ejercicio2/film',{
                detalles: details
            })
        }else{
            res.status(404).json({message :"Film not found"})
        }  
    } 
}

module.exports = {
    getTitle
}

