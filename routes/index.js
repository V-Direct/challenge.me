const express = require("express");
const router = express.Router();
const path = require("path");
const UserModel = require("../models/User");

/* GET home page. */
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
