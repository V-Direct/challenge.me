const express = require("express");
const router = express.Router();
const UserService = require("../services/UserService")

// GET all Users
router.get("/user", (req, res) => {
  UserService.findAll(res);
});

//GET one User
router.get("/user/:username", (req, res) => {
  UserService.findOne(req.params.username, res);
});

//POST add User
router.post("/user", async (req, res) => {
  const users = new UserModel(req.body);

  try {
    await users.save();
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
