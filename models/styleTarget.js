const mongoose = require("mongoose")

const styleTargetSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    tops: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Top"
        }
    ],
    bottoms: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Bottom"
        }
    ],
    shoes: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Shoe"
        }
    ],
    outerwears: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Outerwear"
        }
    ],
    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Accessory"
        }
    ],
    others: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Other"
        }
    ]
})

const StyleTarget = mongoose.model("StyleTarget", styleTargetSchema)

module.exports = StyleTarget