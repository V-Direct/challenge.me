const express = require("express");
const router = express.Router();
const path = require("path");
const UserModel = require("../models/User");

/* GET home page. */
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

router.get("/api/data", (req, res) => {
  res.send({ name: "bro", age: 3 });
});

router.get("/api/users", (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/api/users/{username}", (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/api/users", async (req, res) => {
  const users = new UserModel(req.body);

  try {
    await users.save();
  } catch (error) {
    res.status(500).send(err);
  }
});

module.exports = router;
