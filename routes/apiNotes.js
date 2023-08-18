const router = require('express').Router()
const path = require('path')
const {writeFileSync} = require('fs')
const uniqid = require('uniqid')
const readAndParseFile = require('../helpers/read-and-parse-file')

const notesPath = path.join(__dirname, '..', 'db', 'db.json')

//the get function
router.get('/notes', (req, res) => {
    const notes = readAndParseFile(notesPath)
    res.json(notes)
})

//the post function
router.post('/notes', async(req, res) => {

    const notes = readAndParseFile(notesPath)
    const newID = uniqid()

    const newNote = {
        ...req.body,
        id: newID
    }

    notes.push(newNote)

    writeFileSync(notesPath, JSON.stringify(notes, null, 2))

    res.status(201).json(newNote)
})

// the delete function
router.delete('/notes/:id', (req, res) => {

    const notes = readAndParseFile(notesPath)
    const inputID = req.params.id

    for (noteID in notes){
        const note = notes[noteID]
        if (inputID === note.id){
            notes.splice(noteID, 1)
        }       
    }

    writeFileSync(notesPath, JSON.stringify(notes, null, 2))

    console.log('Note successfully deleted!')
    res.status(200).end()
})

module.exports = router