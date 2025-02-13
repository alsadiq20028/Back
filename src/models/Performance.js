const mongoose = require("mongoose");

const PerformanceSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    grade: { type: Number, min: 0, max: 100 },
    remarks: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Performance", PerformanceSchema);
