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
        enum: ["low", "moderate", "high"],
        default: "moderate",
    },
    status: {
        type: String,
        enum: ["to-do", "ongoing", "complete"],
        default: "to-do",
    },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
