const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    data: [
      { name: "Liz", number: 7 },
      { name: "Eliud", number: 11 },
      { name: "Munyao", number: 12 },
    ],
  });
});

module.exports = app;
