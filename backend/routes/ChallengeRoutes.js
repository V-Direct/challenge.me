const express = require("express");
const router = express.Router();
const ChallengeService = require("../services/ChallengeService");

// GET all Challenge
router.get("/challenge", async (req, res) => {
  await ChallengeService.findAll(res);
});

//GET one Challenge
router.get("/challenge/:title", async (req, res) => {
  await ChallengeService.findOne(req.params.title, res);
});

//GET Creators Challenges
router.get("/challenge/creator/:creator", async (req, res) => {
  await ChallengeService.findCreatorChallenges(req.params.creator, res);
});

//POST add Challenge
router.post("/challenge", async (req, res) => {
  console.log("moin");
  const challenge = req.body;
  await ChallengeService.insert(challenge, res);
});

//PUT update Challenge
router.put("/challenge/:title", async (req, res) => {
  ChallengeService.update(req.params.title, req.body);
  ChallengeService.findOne(req.params.title, res);
});

//DELETE delete one Challenge
router.delete("/challenge/:title", async (req, res) => {
  await ChallengeService.delete(req.params.title, res);
});

module.exports = router;
