const express = require("express");
const UsersServices = require("../services/users-services");

const usersRouter = express.Router();
const bodyParser = express.json();

usersRouter.route("/").get((req, res, next) => {
  UsersServices.getAllUsers(req.app.get("db")).then((user) => {
    res.json(user);
  });
});

module.exports = usersRouter;
