const mongoose = require("mongoose");

const MaterialSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    teachers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }],
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: "Files" }],
  },

  { timestamps: true }
);

module.exports = mongoose.model("Material", MaterialSchema);
