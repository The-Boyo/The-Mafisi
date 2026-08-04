const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

const app = require("./app");

const PORT = process.env.PORT || 3400;

mongoose
  .connect(process.env.LOCAL_DATABASE)
  .then(() => console.log("DB connection successful"));

const server = app.listen(PORT, () =>
  console.log(`Listening to requests on port ${PORT}`),
);
