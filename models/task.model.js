const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  teamId:{
    type: mongoose.Schema.Types.ObjectId,
  },
  employeeId:{
    type: mongoose.Schema.Types.ObjectId,
  }
});

const Task = mongoose.model("tasks", taskSchema);
module.exports = Task;
