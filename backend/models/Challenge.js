const mongoose = require("mongoose");

const ChallengeSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  tag: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  start_date: {
      type: Date,
      required: true
  },
  end_date: {
      type: Date,
      required: false
  },
  creator: {
      type: String
  }
});

const ChallengeModel = mongoose.model("Challenge", ChallengeSchema);
module.exports = ChallengeModel;
