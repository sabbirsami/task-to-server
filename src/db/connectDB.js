const { default: mongoose } = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
    try {
        const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@taskto.deumrfo.mongodb.net/?retryWrites=true&w=majority`;
        await mongoose
            .connect(url, {
                dbName: "taskTo",
            })
            .then(() => {
                console.log("Database connect successfully");
            })
            .catch((err) => {
                console.log(err);
            });
    } catch (error) {
        console.log("connection fail");
    }
};

module.exports = connectDB;
