const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  hits: [
    {
      name: { type: String, required: true },
      points: { type: Number, required: true }
    }
  ],
  name: { type: String, required: true },
  totalScore: { type: Number, default: 0 },
  song: { type: mongoose.Schema.ObjectId, ref: "Song" }
});

module.exports = mongoose.model("Score", scoreSchema);
