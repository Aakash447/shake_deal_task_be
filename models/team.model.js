const mongoose = require("mongoose");
// [
//   {
//     name:'MERN',
//     employeesIds:[]
//   },
//   {
//     name:'PHP',
//     employeesIds:[]
//   },
//   {
//     name:'IOS',
//     employeesIds:[]
//   }
// ]

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  employeeIds:{
    type: Array,
  },
  taskGivenToEmployeeIndex:{
    type:Number,
    default:-1
  }
});

const Team = mongoose.model("teams", teamSchema);
module.exports = Team;
