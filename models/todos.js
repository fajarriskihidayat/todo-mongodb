const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
  value: String,
  status: {
    type: Boolean,
    default: false,
  },
  username: {
    type: String,
    ref: "User",
  },
});

const Todo = mongoose.model("Todo", todosSchema);

module.exports = Todo;
