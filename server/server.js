const express = require("express");
const cors = require("cors");
const config = require("./config");
const apiRouter = require("./api-router");

const server = express();

server.use(cors());
server.use(express.json());
server.use("/api", apiRouter);

server.get("/", (req, res) => {
  res.send("Hello");
});

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
