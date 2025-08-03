// server/routes/authRoutes.js
const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.post("/register", (req, res) => {
  console.log("HIT /register route"); // debug
  res.send("OK");
});

module.exports = router;
