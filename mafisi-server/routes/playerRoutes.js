const express = require("express");
const playerController = require("../controllers/PlayerController");

const router = express.Router();

router
  .route("/")
  .get(playerController.getPlayers)
  .post(playerController.createPlayer);

module.exports = router;
