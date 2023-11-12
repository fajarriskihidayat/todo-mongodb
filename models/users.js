const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: String,
  username: {
    type: String,
    unique: true,
  },
  password: String,
});

const User = mongoose.model("User", usersSchema);

module.exports = User;
