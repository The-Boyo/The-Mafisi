require("dotenv").config({ path: "./config.env" });

const app = require("./app");

const PORT = process.env.PORT || 3400;

const server = app.listen(PORT, () =>
  console.log(`Listening to requests on port ${PORT}`),
);
