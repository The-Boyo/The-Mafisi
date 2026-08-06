const Player = require("../models/playerModel");

exports.getPlayers = async (req, res, next) => {
  const players = await Player.find();

  console.log(players);

  res.status(200).json({
    status: "success",
    results: players.length,
    data: {
      players,
    },
  });
};

exports.createPlayer = async (req, res, next) => {
  const newPlayer = await Player.create(req.body);

  console.log(newPlayer);

  res.status(201).json({
    status: "success",
    data: {
      player: newPlayer,
    },
  });
};

exports.getPlayer = async (req, res, next) => {
  const player = await Player.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      player,
    },
  });
};

exports.updatePlayer = async (req, res, next) => {
  const updatedPlayer = await Player.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    },
  );
  console.log(updatedPlayer);

  res.status(200).json({
    status: "success",
    data: {
      player: updatedPlayer,
    },
  });
};

exports.deletePlayer = async (req, res, next) => {
  await Player.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: "null",
  });
};
