const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();
const bodyparser = require("body-parser");
const morgan = require("morgan");
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// PARS BODY
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Define Routes
app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/students", require("./routes/studentRoutes"));
// app.use("/api/performance", require("./routes/PerformanceRoutes"));
app.use("/api/teacher", require("./routes/teacherRoutes"));
app.use("/api/material", require("./routes/materialRoutes"));

module.exports = app;
