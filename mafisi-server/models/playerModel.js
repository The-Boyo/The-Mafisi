const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    maxLength: [45],
  },
  lastname: {
    type: String,
    required: true,
    maxLength: [45],
  },
  position: {
    type: String,
    enum: ["Goalkeeper", "Defender", "Midfielder", "Attacker"],
    required: [true, "Player must have a position"],
  },
  preferredFoot: {
    type: String,
    enum: ["Right", "Left", "Both"],
    required: [true, "Player must have a preferred foot."],
  },
  createdAt: {
    type: Date,
    default: new Date(Date.now()).toLocaleDateString(),
  },
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
