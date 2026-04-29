const express = require("express");
const router = express.Router();
const Room = require("../models/Room");

// CREATE
router.post("/", async (req, res) => {
    try {
        const room = await Room.create(req.body);
        res.status(201).json(room);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// READ
router.get("/", async (req, res) => {
    const rooms = await Room.find();
    res.json(rooms);
});

// UPDATE
router.put("/:id", async (req, res) => {
    try {
        const updated = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE
router.delete("/:id", async (req, res) => {
    try {
        await Room.findByIdAndDelete(req.params.id);
        res.json({ message: "Room Deleted" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;