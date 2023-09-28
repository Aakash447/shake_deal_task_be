const User = require("../models/User");

const register = async (req, res, next) => {
  const { task, teamId } = req.body;

  if (task && teamId) {

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: role,
    });

    user.save((err, doc) => {
      console.log("err:", err);
      if (err) {
        return res.status(500).send({ message: err });
      }
      return res
        .status(201)
        .send({ message: "User created successfully", doc: doc });
    });
  } else {
    return res.status(400).send({ message: "Bad request data" });
  }
};


module.exports = {
  register,
};
