const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});

const Employee = mongoose.model("employees", employeeSchema);
module.exports = Employee;
