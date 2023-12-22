const express = require("express");
const cors = require("cors");
const connectDB = require("./src/db/connectDB");
const {
    getAllTask,
    deleteATask,
    addTask,
    updateTask,
} = require("./src/routes/taskHandler");
const port = process.env.PORT || 5000;

const app = express();
app.use(
    cors({
        origin: ["http://localhost:5173", "https://sami-taskto.web.app"],
    })
);
app.use(express.json());

app.get("/tasks", getAllTask);
app.post("/tasks", addTask);
app.put("/tasks/:id", updateTask);
app.delete("/tasks/:id", deleteATask);

app.get("/", (req, res) => {
    res.send("Task Task Task uff");
});

const main = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log("More task coming.... on ", port);
    });
};
main();
