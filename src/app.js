const express = require("express");
const cors = require("cors");
const { origin } = require("../config");

const app = express();
app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(cors({ origin }))
  .get("/", (req, res) => {
    res.sendStatus(200);
  })
  .post("/", (req, res) => {
    res.status(201).send({ msg: req.body.data });
  });

module.exports = app;
