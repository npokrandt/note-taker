const routes = require('./routes')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 2024


//middleware
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(routes)
//things

//listening on port this
app.listen(PORT, () =>{
    console.log(`Note Taker listening on http://localhost:${PORT}`)
})