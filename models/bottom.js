const mongoose = require("mongoose")

const bottomSchema = new mongoose.Schema({
    name: String,
    image: String,
    comment: String,
    link: String,
    price: Number,
    styleTarget: {
        type: mongoose.Types.ObjectId,
        ref: "StyleTarget"
    }
})

const Bottom = mongoose.model("Bottom", bottomSchema)

module.exports = Bottom