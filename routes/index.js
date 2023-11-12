const express = require("express");
const router = express.Router();

const userRoute = require("./usersRoute");

router.use("/users", userRoute);

module.exports = router;