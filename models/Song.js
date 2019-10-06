const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema({
  name: { type: String, required: true },
  artist: { type: String, required: true },
  image: { type: String },
  url: { type: String },
  beatMap: { type: mongoose.Schema.ObjectId, ref: "BeatMap" },
  highScore: { type: Number, default: 0 },
  scores: [{ type: mongoose.Schema.ObjectId, ref: "Score" }]
});

module.exports = mongoose.model("Song", songSchema);
