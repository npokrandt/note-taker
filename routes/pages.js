const router = require('express').Router()
const path = require('path')

//the index page works by default

//get the notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'notes.html'))
})

module.exports = router