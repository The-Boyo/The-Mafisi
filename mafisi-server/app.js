const express = require("express");

const app = express();

const playerRouter = require("./routes/playerRoutes");

app.use((req, res, next) => {
  console.log(`Eliud here: ${new Date(Date.now()).getFullYear()}`);
  next();
});

//Body Parser
app.use(express.json());

app.use("/api/v1/players", playerRouter);

module.exports = app;
