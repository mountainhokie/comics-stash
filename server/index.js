const express = require("express");
const cors = require("cors");

const server = express();
const PORT = process.env.PORT || 8080;
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
