const mongoose = require("mongoose");

const TeQuestionSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    choices: [{ type: String }],
    correct: {
      type: Number,
      required: true,
    },
    test: { type: mongoose.Schema.Types.ObjectId, ref: "Test", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TeQuestion", TeQuestionSchema);
