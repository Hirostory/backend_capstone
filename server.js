// Import Dependencies 
require("dotenv").config()
const express = require("express")
const methodOverride = require("method-override")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")

const { DATABASE_URL, PORT = 4000 } = process.env || 4000;

mongoose.connect(DATABASE_URL)

mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected to moongose"))
    .on("error", (err) => console.log(err))

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})
