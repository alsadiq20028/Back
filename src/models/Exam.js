const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "ExQuestion" }],
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
    material: { type: mongoose.Schema.Types.ObjectId, ref: "Material" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Exam", ExamSchema);
