const getFilm = require('../../utils/fetchFilms')

const getTitle = async (req, res) =>{

    console.log("llega peticion con titulo -> " , req.query.title);

    let titulo = req.query.title

    if(titulo){

        let details = await getFilm(titulo)

        console.log(details);

        if(details != null){
            res.render('./ejercicio2/film',{
                detalles : details
            })
        }else{
            res.status(404).json({message :"Film not found"})
        }   

    }

    

    res.status(501).json({message :`parametros ${req.params}`})

}

module.exports = {
    getTitle
}

