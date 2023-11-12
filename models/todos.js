const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
  value: String,
  status: {
    type: String,
    enum: ["Active", "Completed"],
    default: "Active",
  },
  user_id: {
    type: mongoose.ObjectId,
    ref: "User",
  },
});

const Todo = mongoose.model("Todo", todosSchema);

module.exports = Todo;
