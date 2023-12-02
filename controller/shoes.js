const express = require("express")
const router = express.Router()

//connecting to the Schemas to this file
const StyleTarget = require("../models/styleTarget")
const Shoe = require("../models/shoe")

// Shoe Index Route
router.get("/", async (req, res) => {
    try {
        res.json( await Shoe.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Shoe Show Route
router.get("/:id", async (req, res) => {
    try {
        const shoe = await Shoe.findById(req.params.id)
        res,json(shoe)
    } catch (error) {
        res.status(400).json(error)
    }
})

// Shoe Create Route
router.post("/:styleId/add", async (req, res) => {
    const styleId = req.params.styleId

    console.log("Received request to create Shoe for Style Target:", styleId)
    console.log("Request body:", req.body)
    try {
        const newShoe = await Shoe.create({
            ...req.body,
            styleTarget: styleId
        })

        const styleTarget = await StyleTarget.findById(styleId)
        console.log(styleTarget)
        styleTarget.shoes.push(newShoe)
        await styleTarget.save()

        console.log("New Shoe created:", newShoe)
        console.log("Updated Style Target:", styleTarget)

        res,json(newShoe)
    } catch (error) {
        res.status(400).json(error)
    }
})

//Shoe update Route
router.put("/:id", async (req, res) => {
    try {
        res.json(await Shoe.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch (error) {
        res.status(400).json(error)
    }
})

//Shoe DELETE Route 
router.delete("/:id", async (req, res) => {
    try {
        res.json( await Shoe.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router