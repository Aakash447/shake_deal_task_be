const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  employeesIds:{
    type: Array,
  }
});

const Team = mongoose.model("teams", teamSchema);
module.exports = Team;
