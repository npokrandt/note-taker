// setup stuff
const routes = require('./routes')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 2024


//middleware
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(routes)

//listening for the selected port
app.listen(PORT, () =>{
    console.log(`Note Taker listening on http://localhost:${PORT}`)
})