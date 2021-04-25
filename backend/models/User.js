const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: false
  },
  accepted_challenges: {
    type: Array,
    required: false
  }
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
