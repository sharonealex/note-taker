const path = require('path');

module.exports = function(app){

    app.get('/notes', (req, res)=>{     //route to redirect browser to notes.html
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    })

    app.get('*', (req, res)=>{          //route to redirect all generic requests on browser to index.html
         res.sendFile(path.join(__dirname, "../public/index.html"));
    })
}