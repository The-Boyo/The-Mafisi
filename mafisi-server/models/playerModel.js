const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Player must have a first name"],
    maxLength: [45],
  },
  lastname: {
    type: String,
    required: [true, "Player must have a last name"],
    maxLength: [45],
  },
  alias: {
    type: String,
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
  goals: {
    type: Number,
    required: [true, "Player must have number of goals"],
    default: 0,
  },
  assists: {
    type: Number,
    required: [true, "Player must have number of assists"],
    default: 0,
  },
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
