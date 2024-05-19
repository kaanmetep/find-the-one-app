const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "./config.env" });
const app = express();
app.use(cors());
app.use(express.json());
const authController = require("./controllers/authController");
const userController = require("./controllers/userController");
mongoose
  .connect(process.env.DATABASE)
  .then(console.log("db connection is succesfull"));

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/api/v1/users", userController.getAllUsers);

app.get("/api/v1/user/:id", userController.getUser);
app.delete("/api/v1/user/:id", userController.deleteUser);
app.patch("/api/v1/user/:id/password", userController.updatePassword);
app.patch("/api/v1/user/:id/info", userController.updateInfo);
app.patch("/api/v1/user/:id/:likedUserId/like", userController.likeUser);
app.patch(
  "/api/v1/user/:id/:dislikedUserId/dislike",
  userController.dislikeUser
);
app.post("/api/v1/signup", authController.signup);
app.post("/api/v1/login", authController.login);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
