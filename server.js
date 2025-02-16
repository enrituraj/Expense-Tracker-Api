require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const swaggerDocs = require("./config/swaggerConfig");
const authRoutes = require("./routes/auth/authRoutes");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the Expense Tracker API");
});

// Setup Swagger
swaggerDocs(app);

app.listen(PORT, () => {
    // connecting to database and running the server
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
