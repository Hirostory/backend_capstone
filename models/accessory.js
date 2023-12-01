const mongoose = require("mongoose")

const accessorySchema = new mongoose.Schema({
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

const Accessory = mongoose.model("Accessory", accessorySchema)

module.exports = Accessory