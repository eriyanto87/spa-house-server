require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("./config");
const treatmentsRouter = require("../router/treatments-router");
const usersRouter = require("../router/users-router");
const cartRouter = require("../router/cart-router");

const app = express();
const morganOption = NODE_ENV === "production" ? "tiny" : "common";

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use("/api/treatments", treatmentsRouter);
app.use("/api/users", usersRouter);
app.use("/api/cart", cartRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === "product") {
    response = { error: { message: "server error" } };
  } else {
    console.log(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
