const bcrypt = require("bcrypt");
const User = require("../models/users");

const passwordCheck = async (username, password) => {
  const userData = await User.findOne({ username: username });
  const compare = await bcrypt.compare(password, userData.password);
  return { userData, compare };
};

module.exports = passwordCheck;
