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
//   .post(bodyParser, (req, res, next) => {
//     const { name, length, price, display_name } = req.body;
//     const newTreatment = { name, length, price, display_name };
//     for (const field of ["name", "length", "price", "display_name"]) {
//       if (!req.body[field]) {
//         return res.status(400).json({
//           error: {
//             message: `${field} is required`,
//           },
//         });
//       }
//     }
//     TreatmentsService.insertTreatments(req.app.get("db"), newTreatment)
//       .then((newTreatment) => {
//         res.status(201).location(`/${newTreatment.id}`).json(newTreatment);
//       })
//       .catch(next);
//   });

module.exports = treatmentsRouter;
