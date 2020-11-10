const express = require("express");
const CartService = require("../services/cart-services");

const cartRouter = express.Router();
const bodyParser = express.json();

cartRouter.route("/").get((req, res, next) => {
  CartService.getAll(req.app.get("db"))
    .then((cart) => {
      res.json(cart);
    })
    .catch(next);
});

module.exports = cartRouter;
