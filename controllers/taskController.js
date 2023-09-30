const { default: mongoose } = require("mongoose");
const Task = require("../models/task.model");
const Team = require("../models/team.model");

const addTask = async (req, res, next) => {
  try {
    const { task, teamId } = req.body;
    const payload = {
      task,
      teamId,
    };
    console.log("payload:", payload);
    if (task && teamId) {
      let teamDoc = await Team.aggregate([
        {
          $match: {
            _id: new mongoose.Types.ObjectId(teamId),
          },
        },
        {
          $addFields:{
            convertedEmployeeIds:{
              $map: {
                input: "$employeeIds",
                as: "employeeId",
                in: {
                  $toObjectId: "$$employeeId",
                },
              },
            }
          }
        },
        {
          $lookup:{
            from:'employees',
            localField:'convertedEmployeeIds',
            foreignField:'_id',
            as:'employees'
          }
        }
      ]);
      teamDoc = teamDoc[0];
      // console.log("teamDoc:", teamDoc);
      let updatedTeamDoc;

      if (
        teamDoc.taskGivenToEmployeeIndex >=
        teamDoc?.employeeIds?.length - 1
      ) {
        updatedTeamDoc = await Team.findOneAndUpdate(
          {
            _id: teamId,
          },
          {
            $set: {
              taskGivenToEmployeeIndex: 0,
            },
          },
          {
            returnDocument: "after",
          }
        );
      } else {
        updatedTeamDoc = await Team.findOneAndUpdate(
          {
            _id: teamId,
          },
          {
            $inc: {
              taskGivenToEmployeeIndex: 1,
            },
          },
          {
            returnDocument: "after",
          }
        );
      }
      if (updatedTeamDoc) {
        // const taskDoc = await Task.create(payload);
        console.log('teamDoc.employees:',teamDoc.employees);
        console.log('updatedTeamDoc.taskGivenToEmployeeIndex:',updatedTeamDoc.taskGivenToEmployeeIndex);
        const assignedToEmployee = teamDoc.employees[updatedTeamDoc.taskGivenToEmployeeIndex]
        console.log('assignedToEmployee:',assignedToEmployee);
        
        return res.status(201).send({
          message: "Task assigned successfully.",
          assign: updatedTeamDoc,
          assignedToEmployee
        });
      }
    } else {
      return res.status(400).send({ message: "Bad request data" });
    }
  } catch (error) {
    console.error("error:", error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const getTeams = async (req, res, next) => {
  try {
    const teams = await Team.find();
    if (teams) {
      return res.status(200).json({
        teams,
      });
    } else {
      return res.status(404).json({
        message: "Not found",
      });
    }
  } catch (error) {
    console.error("error:", error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

module.exports = {
  addTask,
  getTeams,
};
