const express = require("express");
const router = express.Router();
const Complaint = require("../models/Complaint");

// CREATE
router.post("/", async (req, res) => {
    try {
        const complaint = await Complaint.create(req.body);
        res.status(201).json(complaint);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// READ
router.get("/", async (req, res) => {
    const complaints = await Complaint.find();
    res.json(complaints);
});

// UPDATE (Mostly used to change status to 'Resolved')
router.put("/:id", async (req, res) => {
    try {
        const updated = await Complaint.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE
router.delete("/:id", async (req, res) => {
    try {
        await Complaint.findByIdAndDelete(req.params.id);
        res.json({ message: "Complaint Deleted" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;