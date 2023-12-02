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

// importing the controllers
const styleTargetController = require("./controller/styleTargets.js")
const topController = require("./controller/tops.js")
const bottomController = require("./controller/bottoms.js")
const shoeController = require("./controller/shoes.js")
const outerwearController = require("./controller/outerwears.js")
const accessoryController = require("./controller/accessories.js")
const otherController = require("./controller/others.js")

// Middleware Use
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use("/styletarget", styleTargetController)
app.use("/top", topController)
app.use("/bottom", bottomController)
app.use("/shoe", shoeController)
app.use("/outerwear", outerwearController)
app.use("/accessory", accessoryController)
app.use("/other", otherController)

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})
