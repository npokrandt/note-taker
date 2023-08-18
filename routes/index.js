const router = require('express').Router()

const pageRoutes = require('./pages')
const apiNoteRoutes = require('./apiNotes')

//note api routes
router.use('/api', apiNoteRoutes)

//page routes
router.use('/', pageRoutes)

module.exports = router