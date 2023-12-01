const mongoose = require("mongoose")

const otherSchema = new mongoose.Schema({
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

const Other = mongoose.model("Other", otherSchema)

module.exports = Other