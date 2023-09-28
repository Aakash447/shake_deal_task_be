const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "first name is required."],
    },
    lastName: {
      type: String,
      required: [true, "last name is required."],
    },
    email: {
      type: String,
      required: [true, "email is required."],
      unique: true,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
    },
    countryCode: {
      type: String,
    },
    phoneVerified: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minLength: [8, "password must be atleast 8 character long"],
    },
    avatar: {
      type: String,
    },
    role: {
      type: String,
      enum: ["subadmin", "admin"],
      required: true,
    },
    permissions: {
      type: [
        {
          moduleName: String,
          add: Boolean,
          delete: Boolean,
        },
      ],
    },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
