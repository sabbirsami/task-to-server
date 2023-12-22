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
const updateTask = async (req, res) => {
    try {
        const updatedTask = req.body;
        const result = await Task.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    title: updatedTask.title,
                    priority: updatedTask.priority,
                    status: updatedTask.status,
                    deadline: updatedTask.deadline,
                    description: updatedTask.description,
                },
            }
        );
        if (result.nModified > 0) {
            return res
                .status(200)
                .json({ message: "imageUrl updated successfully" });
        } else {
            return res.status(404).json({ error: "imageUrl update fail" });
        }
    } catch (error) {
        console.log(error);
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
module.exports = { getAllTask, deleteATask, addTask, updateTask };
