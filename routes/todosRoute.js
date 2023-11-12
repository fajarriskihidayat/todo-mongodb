const express = require("express");
const router = express.Router();

const todos = require("../controllers/todosController");
const verifyToken = require("../middleware/auth");

router.get("/all", todos.getAllTodos);
router.get("/:username", verifyToken, todos.getTodosByUser);
router.get("/detail/:id", verifyToken, todos.detailTodo);
router.post("/", todos.createTodo);
router.put("/:id", todos.updateTodo);
router.put("/status/:id", todos.updateStatus);
router.delete("/:id", todos.deleteTodo);
router.delete("/all/:username", todos.deleteAllTodo);

module.exports = router;
