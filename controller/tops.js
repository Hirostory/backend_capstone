const express = require("express")
const router = express.Router()

//connecting to the Schemas to this file
const StyleTarget = require("../models/styleTarget")
const Top = require("../models/top")

// Top Index Route
router.get("/", async (req, res) => {
    try {
        res.json( await Top.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Top Show Route
router.get("/:id", async (req, res) => {
    try {
        const top = await Top.findById(req.params.id)
        res,json(top)
    } catch (error) {
        res.status(400).json(error)
    }
})

// Top Create Route
router.post("/:styleId/add", async (req, res) => {
    const styleId = req.params.styleId

    console.log("Received request to create top for Style Target:", styleId)
    console.log("Request body:", req.body)
    try {
        const newTop = await Top.create({
            ...req.body,
            styleTarget: styleId
        })

        const styleTarget = await StyleTarget.findById(styleId)
        console.log(styleTarget)
        styleTarget.tops.push(newTop)

        console.log("New Top created:", newTop)
        console.log("Updated Style Target:", styleTarget)

        res,json(newTop)
    } catch (error) {
        res.status(400).json(error)
    }
})

//Top update Route
router.put("/:id", async (req, res) => {
    try {
        res.json(await Top.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch (error) {
        res.status(400).json(error)
    }
})

//Top DELETE Route 
router.delete("/:id", async (req, res) => {
    try {
        res.json( await Top.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router