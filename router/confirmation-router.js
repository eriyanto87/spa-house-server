const express = require("express");
const ConfirmationService = require("../services/confirmation-services");

const confirmationRouter = express.Router();
const bodyParser = express.json();

confirmationRouter
  .route("/")
  .get((req, res, next) => {
    ConfirmationService.getAll(req.app.get("db"))
      .then((c) => {
        res.json(c);
      })
      .catch(next);
  })
  .post(bodyParser, (req, res, next) => {
    const {
      user_id,
      treatment_id,
      comment,
      order_date,
      appointment_date,
    } = req.body;
    const newConfirmation = {
      user_id,
      treatment_id,
      comment,
      order_date,
      appointment_date,
    };
    for (const field of ["appointment_date"]) {
      if (!req.body[field]) {
        return res.status(400).json({
          error: {
            message: `${field} is required`,
          },
        });
      }
    }
    ConfirmationService.insertConfirmation(req.app.get("db"), newConfirmation)
      .then((c) => {
        res.status(201).location(`/${c.id}`).json(c);
      })
      .catch(next);
  });

module.exports = confirmationRouter;
