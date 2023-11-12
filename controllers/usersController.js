const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const passwordCheck = require("../helpers/passwordCheck");

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      data: users,
      message: "Get All Data",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    res.status(200).json({
      data: user,
      message: "Get User By Id",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createUser = async (req, res) => {
  const { name, username, password } = req.body;

  if (!name || !username || !password) {
    return res.status(400).json({
      message: "Data can not be empty",
    });
  }

  const encryptPwd = await bcrypt.hash(password, 10);

  try {
    const addUser = await User.create({
      name,
      username,
      password: encryptPwd,
    });

    res.status(201).json({
      data: addUser,
      message: "User Created Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  const { user } = req.params;
  const { name, username, password, newPassword } = req.body;

  const check = await passwordCheck(user, password);
  const encryptPwd = await bcrypt.hash(newPassword, 10);

  if (!check.compare) {
    return res.status(400).json({
      message: "Wrong Password",
    });
  }

  const filter = { username: user };
  const data = {
    name,
    username,
    password: encryptPwd,
  };

  try {
    const updateUser = await User.findOneAndUpdate(filter, data, { new: true });

    res.status(200).json({
      data: updateUser,
      message: "User Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username: username });
  if (!user) return res.status(400).json({ message: "User Not Found" });

  const check = await passwordCheck(username, password);
  if (!check.compare)
    return res.status(400).json({ message: "Wrong Password" });

  try {
    const token = jwt.sign({ username: username }, process.env.SECRET_KEY);

    res.status(200).json({
      token,
      message: "Login Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  loginUser,
};
