const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post");

// Get user profile and their posts
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    const posts = await Post.find({ author: user._id }).sort({ createdAt: -1 });

    res.json({ user, posts });
  } catch (err) {
    console.error("Error fetching profile:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
