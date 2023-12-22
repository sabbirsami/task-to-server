const Task = require("../schema/taskSchema");

const getAllTask = async (req, res) => {
    try {
        const result = await Task.find();
        res.send(result);
    } catch (error) {
        console.log("Error to get all task", error);
    }
};
const addTask = async (req, res) => {
    try {
        const task = req.body;
        const newTask = new Task(task);
        const result = await newTask.save();
        res.send(result);
    } catch (error) {
        console.log("Error to get all task", error);
    }
};
const deleteATask = async (req, res) => {
    try {
        const result = await Task.deleteOne({ _id: req.params.id });
        res.send(result);
    } catch (error) {
        console.log("Can't delete", error);
    }
};
module.exports = { getAllTask, deleteATask, addTask };
