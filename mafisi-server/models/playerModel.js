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
    enum: ["Defender", "Midfielder", "Attacker"],
    required: [true, "Player must have a position"],
  },
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
