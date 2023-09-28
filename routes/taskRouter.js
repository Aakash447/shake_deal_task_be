const express = require("express");
const {
  register,
} = require("../controllers/authController");
const taskRouter = express.Router();

taskRouter.post("/", register);


module.exports = taskRouter;
