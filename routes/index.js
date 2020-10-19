const express = require("express");
const router = express.Router();
const path = require("path");

/* GET home page. */
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

router.get("/api/data", (req, res) => {
  res.send({ name: "bro", age: 3 });
});

module.exports = router;
