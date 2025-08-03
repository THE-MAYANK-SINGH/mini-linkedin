// server/routes/postRoutes.js
const express = require("express");
const router = express.Router();
const { createPost, getAllPosts, getUserPosts } = require("../controllers/postController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, createPost);
router.get("/", getAllPosts);
router.get("/user/:userId", getUserPosts);

module.exports = router;
