//Importing all dependencies
const { uuid } = require('uuidv4');
const fs = require('fs');
const { response } = require('express');

module.exports = (app) => {

    app.get("/api/notes", (req, res) => {                     // route to fetch all the notes from db.json store  
        console.log("GET notes...");
        let noteData = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
        res.json(noteData);
    })

    app.post("/api/notes", (req, res) => {                     //route to create a new note and save in data store
        const newNote = req.body;
        newNote['id'] = uuid();
        let noteData = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
        noteData.push(newNote);
        fs.writeFile("db/db.json", JSON.stringify(noteData, '\t'), err => {
            if (err) throw err;
            return true;
        });
        res.json(newNote);
    })

    app.delete("/api/notes/:id", (req, res) => {                //route to delete a note based on its id from the db store
        let noteId = req.params.id;
        let noteData = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
        const newData = noteData.filter(note => note.id !== noteId);
        fs.writeFile("db/db.json", JSON.stringify(newData, '\t'), err => {
            if (err) throw err;
            return true;
        });
        res.json(newData);
    })
}
