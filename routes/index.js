const express = require("express");
const router = express.Router();

const usersRoute = require("./usersRoute");
const todosToue = require("./todosRoute");

router.use("/", (req, res) => {
  res.send("Selamat Datang di Todo API Fajar Riski Hidayat");
});
router.use("/users", usersRoute);
router.use("/todos", todosToue);

module.exports = router;
