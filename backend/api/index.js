const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config({ path: "../config.env" });
const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);
app.options("*", cors());
app.use(express.json());
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const matchRoutes = require("./routes/matchRoutes");

mongoose
  .connect(process.env.DATABASE)
  .then(console.log("db connection is succesfull"));

app.get("/", (req, res) => {
  res.json("server is on");
});

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes); //
app.use("/api/v1/match", matchRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
