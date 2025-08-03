// server/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/users", userRoutes);

app.get("/ping", (req, res) => {
  console.log("Ping received");
  res.send("pong");
});


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5001, () =>
      console.log("Server running 🚀")
    );
  })
  .catch((err) => console.log(err));
