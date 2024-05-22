/** @format */

// Load environment variables from .env file
require("dotenv").config();

// Import required packages and modules
const express = require("express");
const connectToDB = require("./Connection/connect");

// Initialize express application
const app = express();

// Connect to MongoDB
connectToDB();

// Middleware to parse JSON requests
app.use(express.json());

// Import routes
const adminRoute = require("./Routes/admin");
const userRoute = require("./Routes/user");
const authController = require("./Middleware/authController");

// Define API routes
app.use("/api/admin", adminRoute);
app.use("/api/user", userRoute);
app.post("/api/register", authController.registerUser);
app.post("/api/login", authController.loginUser);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
