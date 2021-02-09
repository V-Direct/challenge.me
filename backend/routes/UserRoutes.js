const express = require("express");
const router = express.Router();
const UserService = require("../services/UserService")

// GET all Users
router.get("/user", async (req, res) => {
  await UserService.findAll(res);
});

//GET one User
router.get("/user/:username", async (req, res) => {
  await UserService.findOne(req.params.username, res);
});

//POST add User
router.post("/user", async (req, res) => {
  const user = req.body;
  await UserService.insert(user, res);
});

//PUT update User
router.put("/user/:username", async (req, res)=> {
  UserService.update(req.params.username, req.body);
  UserService.findOne(req.params.username, res);
});

//DELETE delete one User
router.delete("/user/:username", async (req, res) => {
  await UserService.delete(req.params.username, res)
})

module.exports = router;
