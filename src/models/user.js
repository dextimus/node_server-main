const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { type: "string", required: true, unique: true },
    password: { type: "string", required: true },
    token: { type: "string", required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("User", UserSchema, "users");

module.exports = User;
