const mongoose = require("mongoose")

const outerwearSchema = new mongoose.Schema({
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

const Outerwear = mongoose.model("Outerwear", outerwearSchema)

module.exports = Outerwear