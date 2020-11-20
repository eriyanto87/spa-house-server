const express = require("express");
const TreatmentsService = require("../services/treatments-services");

const treatmentsRouter = express.Router();
const bodyParser = express.json();

treatmentsRouter.route("/").get((req, res, next) => {
  TreatmentsService.getAllTreatments(req.app.get("db"))
    .then((treatment) => {
      res.json(treatment);
    })
    .catch(next);
});

module.exports = treatmentsRouter;
