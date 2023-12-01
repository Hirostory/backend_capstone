const mongoose = require("mongoose")

const topSchema = new mongoose.Schema({
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

const Top = mongoose.model("Top", topSchema)

module.exports = Top