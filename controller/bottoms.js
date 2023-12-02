const express = require("express")
const router = express.Router()

//connecting to the Schemas to this file
const StyleTarget = require("../models/styleTarget")
const Bottom = require("../models/bottom")

// Bottom Index Route
router.get("/", async (req, res) => {
    try {
        res.json( await Bottom.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Bottom Show Route
router.get("/:id", async (req, res) => {
    try {
        const bottom = await Bottom.findById(req.params.id)
        res,json(bottom)
    } catch (error) {
        res.status(400).json(error)
    }
})

// Bottom Create Route
router.post("/:styleId/add", async (req, res) => {
    const styleId = req.params.styleId

    console.log("Received request to create Bottom for Style Target:", styleId)
    console.log("Request body:", req.body)
    try {
        const newBottom = await Bottom.create({
            ...req.body,
            styleTarget: styleId
        })

        const styleTarget = await StyleTarget.findById(styleId)
        console.log(styleTarget)
        styleTarget.bottoms.push(newBottom)

        console.log("New Bottom created:", newBottom)
        console.log("Updated Style Target:", styleTarget)

        res,json(newBottom)
    } catch (error) {
        res.status(400).json(error)
    }
})

//Bottom update Route
router.put("/:id", async (req, res) => {
    try {
        res.json(await Bottom.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch (error) {
        res.status(400).json(error)
    }
})

//Bottom DELETE Route 
router.delete("/:id", async (req, res) => {
    try {
        res.json( await Bottom.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router