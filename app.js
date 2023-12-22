const express = require("express");
const cors = require("cors");
const connectDB = require("./src/db/connectDB");
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:5173", "https://sami-taskto.web.app/"],
    })
);

app.post("/tasks", async (req, res) => {
    console.log("object");
});

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
