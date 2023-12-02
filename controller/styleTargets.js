const express = require("express")
const router = express.Router()

//connecting to the Schemas to this file
const StyleTarget = require("../models/styleTarget")

// StyleTarget Index Route
router.get("/", async (req, res) => {
    try {
        res.json( await StyleTarget.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})

// StyleTarget Show Route
router.get("/:id", async (req, res) => {
    try {
        const styleTarget = await StyleTarget.findById(req.params.id)
        res.json(styleTarget)
    } catch (error) {
        res.status(400).json(error)
    }
})

// StyleTarget Create Route
router.post("/", async (req, res)  => {
    try {
        res.json( await StyleTarget.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})

// StyleTarget Update Route 
router.put("/:id", async (req, res) => {
    try {
        res.json( await StyleTarget.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch (error) {
        res.status(400).json(error)
    }
})

// StyleTarget DELETE Route
router.delete("/:id", async (req, res) => {
    try {
        res.json( await StyleTarget.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
}) 

module.exports = router