const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  teamId:{
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Task = mongoose.model("tasks", taskSchema);
module.exports = Task;
