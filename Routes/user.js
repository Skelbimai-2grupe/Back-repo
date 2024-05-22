/** @format */

const express = require("express");
const User = require("../models/User");
const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");
const router = express.Router();

// Assign admin role to a user
router.post("/assign-admin", verifyToken, checkAdminRole, async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(404).send("User not found");

    user.role = "admin";
    await user.save();
    res.send("Admin role assigned");
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
