const express = require("express")
const router = express.Router()

//connecting to the Schemas to this file
const StyleTarget = require("../models/styleTarget")
const Accessory = require("../models/accessory")

// Accessory Index Route
router.get("/", async (req, res) => {
    try {
        res.json( await Accessory.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Accessory Show Route
router.get("/:id", async (req, res) => {
    try {
        const accessory = await Accessory.findById(req.params.id)
        res,json(accessory)
    } catch (error) {
        res.status(400).json(error)
    }
})

// Accessory Create Route
router.post("/:styleId/add", async (req, res) => {
    const styleId = req.params.styleId

    console.log("Received request to create Accessory for Style Target:", styleId)
    console.log("Request body:", req.body)
    try {
        const newAccessory = await Accessory.create({
            ...req.body,
            styleTarget: styleId
        })

        const styleTarget = await StyleTarget.findById(styleId)
        console.log(styleTarget)
        styleTarget.accessories.push(newAccessory)

        console.log("New Accessory created:", newAccessory)
        console.log("Updated Style Target:", styleTarget)

        res,json(newAccessory)
    } catch (error) {
        res.status(400).json(error)
    }
})

//Accessory update Route
router.put("/:id", async (req, res) => {
    try {
        res.json(await Accessory.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch (error) {
        res.status(400).json(error)
    }
})

//Accessory DELETE Route 
router.delete("/:id", async (req, res) => {
    try {
        res.json( await Accessory.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router