const mongoose = require("mongoose");

const ExQuestionSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    choices: [{ type: String }],
    correct: {
      type: Number,
      required: true,
    },
    exam: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ExQuestion", ExQuestionSchema);
