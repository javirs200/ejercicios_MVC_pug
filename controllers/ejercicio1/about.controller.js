const getAbout = (req,res)=>{
    //res.render('./ejercicio1/about')
    res.render('./ejercicio1/aboutContact2in1',{render:'about'})
}

module.exports = {
    getAbout
}
