const express = require("express");
const router = express.Router();
const UserModel = require("../models/User");

// GET all Users
router.get("/user", (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

//GET one User
router.get("/user/:username", (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

//POST add User
router.post("/user", async (req, res) => {
  const users = new UserModel(req.body);

  try {
    await users.save();
  } catch (error) {
    res.status(500).send(err);
  }
});

module.exports = router;
