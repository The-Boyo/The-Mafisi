const Player = require("../models/playerModel");

exports.getPlayers = async (req, res, next) => {
  const players = await Player.find();

  console.log(players);

  res.status(200).json({
    status: "success",
    results: players.length,
    data: players,
  });
};

exports.createPlayer = async (req, res, next) => {
  const newPlayer = await Player.create(req.body);

  console.log(newPlayer);

  res.status(201).json({
    status: "success",
    data: newPlayer,
  });
};
