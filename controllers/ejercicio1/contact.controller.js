const getMembers = (req,res) => {
    /*res.render('./ejercicio1/contact',{
        imageJavi: 'https://avatars.githubusercontent.com/u/6449798?v=4',
        imageAlejandro: 'https://avatars.githubusercontent.com/u/144797221?v=4',
        githubJavi: 'https://github.com/javirs200',
        githubAlejandro: 'https://github.com/alejandroFMA'
    })*/
    res.render('./ejercicio1/aboutContact2in1',{
        render:'contact',
        imageJavi: 'https://avatars.githubusercontent.com/u/6449798?v=4',
        imageAlejandro: 'https://avatars.githubusercontent.com/u/144797221?v=4',
        githubJavi: 'https://github.com/javirs200',
        githubAlejandro: 'https://github.com/alejandroFMA'
    })
}

module.exports = {
    getMembers
}