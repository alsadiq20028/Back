const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "TeQuestion" }],
    material: { type: mongoose.Schema.Types.ObjectId, ref: "Material" },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Test", TestSchema);
