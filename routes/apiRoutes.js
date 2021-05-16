const { uuid } = require('uuidv4');
const fs = require('fs');

module.exports = function(app){

    app.get("/api/notes", (req, res)=>{
        console.log("GET notes...")
        //read the db.json file
        // display all notes in response body.
    })

    app.post("/api/notes",(req, res)=>{
        console.log("note created")

        //get note from Request body.
        //write to file after assigninng uniq id

    })


}
