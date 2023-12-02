const express = require("express")
const router = express.Router()

//connecting to the Schemas to this file
const StyleTarget = require("../models/styleTarget")
const Other = require("../models/other")

// Other Index Route
router.get("/", async (req, res) => {
    try {
        res.json( await Other.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Other Show Route
router.get("/:id", async (req, res) => {
    try {
        const other = await Other.findById(req.params.id)
        res,json(other)
    } catch (error) {
        res.status(400).json(error)
    }
})

// Other Create Route
router.post("/:styleId/add", async (req, res) => {
    const styleId = req.params.styleId

    console.log("Received request to create Other for Style Target:", styleId)
    console.log("Request body:", req.body)
    try {
        const newOther = await Other.create({
            ...req.body,
            styleTarget: styleId
        })

        const styleTarget = await StyleTarget.findById(styleId)
        console.log(styleTarget)
        styleTarget.others.push(newOther)

        console.log("New Other created:", newOther)
        console.log("Updated Style Target:", styleTarget)

        res,json(newOther)
    } catch (error) {
        res.status(400).json(error)
    }
})

//Other update Route
router.put("/:id", async (req, res) => {
    try {
        res.json(await Other.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch (error) {
        res.status(400).json(error)
    }
})

//Other DELETE Route 
router.delete("/:id", async (req, res) => {
    try {
        res.json( await Other.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router