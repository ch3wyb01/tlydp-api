const express = require("express");
const ducksRouter = require("./ducks.router");
const usersRouter = require("./users.router");
const { getEndpoints } = require("../controllers/api.controllers");

const apiRouter = express.Router();

apiRouter.route("/").get(getEndpoints);
apiRouter.use("/ducks", ducksRouter);
apiRouter.use("/users", usersRouter);

module.exports = apiRouter;
