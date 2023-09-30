const express = require("express");
const {
  addTask, getTeams,
} = require("../controllers/taskController");
const taskRouter = express.Router();

taskRouter.get("/teams", getTeams);
taskRouter.post("/addTask", addTask);



module.exports = taskRouter;
