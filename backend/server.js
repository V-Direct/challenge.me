require("dotenv").config();
const cors = require("cors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const routes = require("./routes/index");
const userroutes = require("./routes/UserRoutes");
const challengeroutes = require("./routes/ChallengeRoutes");
const app = express();

const mongoose = require("mongoose");

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, "../frontend/build")));


app.use("/", routes);
app.use("/", userroutes);
app.use("/", challengeroutes);

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);

mongoose.connection.once("open", () => console.log("Connection approved"));

module.exports = app;
