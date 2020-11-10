const express = require("express");
const CartService = require("../services/cart-services");

const cartRouter = express.Router();
const bodyParser = express.json();

cartRouter
  .route("/")
  .get((req, res, next) => {
    CartService.getAll(req.app.get("db"))
      .then((cart) => {
        res.json(cart);
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
    const newCart = {
      user_id,
      treatment_id,
      comment,
      order_date,
      appointment_date,
    };
    for (const field of ["order_date", "appointment_date"]) {
      if (!req.body[field]) {
        return res.status(400).json({
          error: {
            message: `${field} is required`,
          },
        });
      }
    }
    CartServices.insertCart(req.app.get("db"), newCart)
      .then((cart) => {
        res.status(201).location(`/${cart.id}`).json(cart);
      })
      .catch(next);
  });
module.exports = cartRouter;
