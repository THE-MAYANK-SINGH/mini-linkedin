// server/controllers/postController.js
const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  const { content } = req.body;
  const userId = req.userId;

  try {
    const newPost = await Post.create({ content, author: userId });
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ message: "Failed to create post", error: err.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name email")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch posts", error: err.message });
  }
};

exports.getUserPosts = async (req, res) => {
  const { userId } = req.params;

  try {
    const posts = await Post.find({ author: userId })
      .sort({ createdAt: -1 })
      .populate("author", "name email");

    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch user posts", error: err.message });
  }
};
