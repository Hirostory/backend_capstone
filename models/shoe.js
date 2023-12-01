const mongoose = require("mongoose")

const shoeSchema = new mongoose.Schema({
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

const Shoe = mongoose.model("Shoe", shoeSchema)

module.exports = Shoe