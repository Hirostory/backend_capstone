const express = require("express")
const router = express.Router()

//connecting to the Schemas to this file
const StyleTarget = require("../models/styleTarget")
const Outerwear = require("../models/outerwear")

// Outerwear Index Route
router.get("/", async (req, res) => {
    try {
        res.json( await Outerwear.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Outerwear Show Route
router.get("/:id", async (req, res) => {
    try {
        const outerwear = await Outerwear.findById(req.params.id)
        res,json(outerwear)
    } catch (error) {
        res.status(400).json(error)
    }
})

// Outerwear Create Route
router.post("/:styleId/add", async (req, res) => {
    const styleId = req.params.styleId

    console.log("Received request to create Outerwear for Style Target:", styleId)
    console.log("Request body:", req.body)
    try {
        const newOuterwear = await Outerwear.create({
            ...req.body,
            styleTarget: styleId
        })

        const styleTarget = await StyleTarget.findById(styleId)
        console.log(styleTarget)
        styleTarget.outerwears.push(newOuterwear)

        console.log("New Outerwear created:", newOuterwear)
        console.log("Updated Style Target:", styleTarget)

        res,json(newOuterwear)
    } catch (error) {
        res.status(400).json(error)
    }
})

//Outerwear update Route
router.put("/:id", async (req, res) => {
    try {
        res.json(await Outerwear.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch (error) {
        res.status(400).json(error)
    }
})

//Outerwear DELETE Route 
router.delete("/:id", async (req, res) => {
    try {
        res.json( await Outerwear.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router