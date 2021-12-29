const router = require('express').Router();
// import data from db.json
const notes = require('../db/db.json');
// uuidv4 creates id for each note
const { uuid } = require('uuidv4');

const fs = require('fs');
const path = require('path');

// GET /notes from db.json file 
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

// POST /notes to make new notes on the app page
router.post('/notes', (req, res) => {
    const freshNote = req.body;
    freshNote.id = uuidv4();
    // add data to notes array
    notes.push(freshNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
    res.json(notes);
});

// delete notes from the app
router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    // delete note with unique id
    const delNote = notes.filter(note => note.id !== id);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(delNote, null, 2)
    );
    res.json(delNote);
});

module.exports = router;
