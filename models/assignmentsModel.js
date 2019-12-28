const mongoose = require("mongoose");

const assignmentSchema = mongoose.Schema({
    branch: String,
    year: Number,
    division: String,
    title: String,
    path: String
});

module.exports = mongoose.model('Assignment', assignmentSchema);