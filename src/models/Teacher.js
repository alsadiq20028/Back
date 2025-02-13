const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    fourthname: {
      type: String,
      required: true,
      trim: true,
    },
    material: { type: String, required: true },
    address: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);
const Teacher = mongoose.model("Teacher", TeacherSchema);
module.exports = Teacher;