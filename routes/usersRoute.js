const express = require("express");
const router = express.Router();

const users = require("../controllers/usersController");
const verifyToken = require("../middleware/auth");

router.get("/all", users.getAllUser);
router.get("/:id", verifyToken, users.getUserById);
router.post("/", users.createUser);
router.put("/:user", users.updateUser);
router.post("/login", users.loginUser);

module.exports = router;
