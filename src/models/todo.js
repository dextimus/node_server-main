"use strict";

const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    status: { type: String, required: true },
    description: { type: "string", required: false },
    author: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Todo", todoSchema, "todo");
