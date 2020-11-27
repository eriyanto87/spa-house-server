const express = require("express");
const UsersServices = require("../services/users-services");

const usersRouter = express.Router();
const bodyParser = express.json();

usersRouter.route("/").post(bodyParser, (req, res, next) => {
  const {
    user_name,
    user_number,
    user_email,
    user_street,
    user_city,
    user_state,
    user_zip,
  } = req.body;

  const newUser = {
    user_name,
    user_number,
    user_email,
    user_street,
    user_city,
    user_state,
    user_zip,
  };
  for (const field of ["user_name", "user_number"]) {
    if (!req.body[field]) {
      return res.status(400).json({
        error: {
          message: `${field} is required`,
        },
      });
    }
  }
  UsersServices.insertUser(req.app.get("db"), newUser)
    .then((user) => {
      res.status(201).location(`/${user.id}`).json(user);
    })
    .catch(next);
});

module.exports = usersRouter;
