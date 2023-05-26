import express from "express";
import cors from "cors";
import config from "./config.mjs";
import apiRouter from "./api-router.mjs";

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
