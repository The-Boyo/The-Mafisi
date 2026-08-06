const express = require("express");
const playerController = require("../controllers/PlayerController");

const router = express.Router();

router
  .route("/")
  .get(playerController.getPlayers)
  .post(playerController.createPlayer);

router
  .route("/:id")
  .get(playerController.getPlayer)
  .patch(playerController.updatePlayer)
  .delete(playerController.deletePlayer);

module.exports = router;
