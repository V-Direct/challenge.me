const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const routes = require("./routes/index");

const app = express();

const mongoose = require("mongoose");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./client/build")));

app.use("/", routes);
app.use("/api/data", routes);

mongoose.connect(
  "mongodb+srv://admin:admin@challenge-me.nalk9.mongodb.net/challenge-me?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

module.exports = app;
