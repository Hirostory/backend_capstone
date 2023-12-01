// Import Dependencies 
require("dotenv").config
const express = require("express")
const methodOverride = require("method-override")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")

const { DATABASE_URL, PORT = 4000 } = process.env || 4000;


app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})
