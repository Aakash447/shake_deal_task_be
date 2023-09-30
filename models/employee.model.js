const mongoose = require("mongoose");
[
  {
    name:'Harinder Rathore',
    teamId:'651638a8cc25418961397dc4',
    experience:'3year',
    position:'IOS Developer'
  },
  {
    name:'Yogesh vaishnav',
    teamId:'651638a8cc25418961397dc4',
    experience:'2year',
    position:'IOS Developer'
  },
  {
    name:'Manish Prajapati',
    teamId:'651638a8cc25418961397dc4',
    experience:'3year',
    position:'IOS Developer'
  },
  {
    name:'Reena Kumawat',
    teamId:'651638a8cc25418961397dc4',
    experience:'3year',
    position:'IOS Developer'
  }
]

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
