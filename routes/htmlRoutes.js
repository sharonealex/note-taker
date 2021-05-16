
module.exports = function(app){

    app.get('/notes', (req, res)=>{
 //route to notes.html
    })

    app.get('*', (req, res)=>{
//route to index.html
    })
}