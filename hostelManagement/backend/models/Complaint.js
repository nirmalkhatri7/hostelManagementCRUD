const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Resolved'], default: 'Pending' }
});

module.exports = mongoose.model('Complaint', complaintSchema);