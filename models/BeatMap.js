const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beatMapSchema = new Schema({
  notes: [
    {
      time: { type: Number },
      position: {
        x: {
          type: Number
        },
        y: {
          type: Number
        }
      }
    }
  ],
  song: { type: mongoose.Schema.ObjectId, ref: "Song" }
});

module.exports = mongoose.model("BeatMap", beatMapSchema);
