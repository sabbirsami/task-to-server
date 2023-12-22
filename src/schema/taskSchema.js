const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    priority: {
        type: String,
        enum: ["Low", "Moderate", "High"],
        default: "Moderate",
    },
    status: {
        type: String,
        enum: ["To-Do", "Ongoing", "Completed"],
        default: "To-Do",
    },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
