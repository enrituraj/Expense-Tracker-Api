require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Expense Tracker API");
});

app.listen(PORT, () => {
    // connecting to database and running the server
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
