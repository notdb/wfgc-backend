const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const arcadesRouter = require("../arcades/arcades-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/arcades", arcadesRouter);

server.get("/", (req, res) => {
  res.send("It's alive!");
});
//test
module.exports = server;
