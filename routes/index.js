const router = require('express').Router()

const pageRoutes = require('./pages')

//page routes
router.use('/', pageRoutes)

//notes api router below needs to:
//load in all existing notes to the notes.html file
//add notes to the json file when added and saved
//add the new note to the side

module.exports = router