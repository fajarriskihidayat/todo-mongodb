const express = require("express");
const router = express.Router();

const usersRoute = require("./usersRoute");
const todosToue = require("./todosRoute");

router.use("/users", usersRoute);
router.use("/todos", todosToue);

module.exports = router;
