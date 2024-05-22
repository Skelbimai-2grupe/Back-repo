/** @format */

const express = require("express");
const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");
const router = express.Router();

// Example admin route
router.get("/admin", verifyToken, checkAdminRole, (req, res) => {
  res.send("Welcome Admin");
});

module.exports = router;
