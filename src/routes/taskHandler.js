const Task = require("../schema/taskSchema");

const getAllTask = async (req, res) => {
    try {
        const result = await Task.find();
        res.send(result);
    } catch (error) {
        console.log("Error to get all task", error);
    }
};
module.exports = { getAllTask };
