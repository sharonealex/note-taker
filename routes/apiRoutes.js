const { uuid } = require('uuidv4');
const fs = require('fs');
const { response } = require('express');

module.exports = (app)=>{

    app.get("/api/notes", (req, res)=>{
        console.log("GET notes...");
        let noteData = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
        res.json(noteData);
    })

    app.post("/api/notes",(req, res)=>{
        const newNote = req.body;
        newNote['id'] = uuid();
        let noteData = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
        noteData.push(newNote);
        fs.writeFile("db/db.json",JSON.stringify(noteData,'\t'),err => {
                if (err) throw err;
                return true;
            });
        res.json(newNote);
    })

   

}
