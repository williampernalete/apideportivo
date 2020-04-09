const express = require("express");
const jwt = require("jsonwebtoken");

const rutasProtegidas = express.Router();

rutasProtegidas.use((req, res, next) => {
  var token = req.headers["authorization"];
  var llavemaestra = process.env.SEED_AUTENTICACION;

  token = token.replace("Bearer ", "");

  if (!token) {
    res.status(401).send({
      mensaje: "token es necesario...",
    });
  }

  jwt.verify(token, llavemaestra, (err, decoded) => {
    if (err) {
      res.status(401).send({
        error: "token invalido",
      });
    } else {
      req.decoded = decoded;
      next();
    }
  });
});

module.exports = rutasProtegidas;
