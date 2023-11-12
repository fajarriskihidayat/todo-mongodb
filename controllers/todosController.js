const User = require("../models/users");
const Todos = require("../models/todos");

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todos.find();

    res.status(200).json({
      data: todos,
      message: "Get All Todos",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getTodosByUser = async (req, res) => {
  const { username } = req.params;

  const user = await User.findOne({ username: username });
  if (!user) {
    return res.status(404).json({
      message: "User Not Found",
    });
  }

  try {
    const todosByUser = await Todos.find({ username: username });

    res.status(200).json({
      data: todosByUser,
      message: "Get Todos By Username",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const detailTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todos.findOne({ _id: id });

    res.status(200).json({
      data: todo,
      message: "Detail Todo",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createTodo = async (req, res) => {
  const { value, username } = req.body;

  if (!value || !username) {
    return res.status(400).json({
      message: "Data can not be empty",
    });
  }

  const user = await User.findOne({ username: username });
  if (!user) {
    return res.status(404).json({
      message: "User Not Found",
    });
  }

  try {
    const todo = await Todos.create({ value, username });

    res.status(201).json({
      data: todo,
      message: "Todo Created Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;

  if (!value) {
    return res.status(400).json({
      message: "Data can not be empty",
    });
  }

  try {
    const todo = await Todos.findOneAndUpdate(
      { _id: id },
      { value },
      { new: true }
    );

    res.status(200).json({
      data: todo,
      message: "Todo Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({
      message: "Data can not be empty",
    });
  }

  try {
    const todo = await Todos.findOneAndUpdate(
      { _id: id },
      { status },
      { new: true }
    );

    res.status(200).json({
      data: todo,
      message: "Status Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todos.deleteOne({ _id: id });

    res.status(200).json({
      data: {
        deleted: todo.deletedCount,
      },
      message: "Todo Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteAllTodo = async (req, res) => {
  const { username } = req.params;

  const user = await User.findOne({ username: username });
  if (!user) {
    return res.status(404).json({
      message: "User Not Found",
    });
  }

  try {
    const todo = await Todos.deleteMany({ username: username });

    res.status(200).json({
      data: {
        deleted: todo.deletedCount,
      },
      message: "Delete All Todo Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllTodos,
  getTodosByUser,
  detailTodo,
  createTodo,
  updateTodo,
  updateStatus,
  deleteTodo,
  deleteAllTodo,
};
