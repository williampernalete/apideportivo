const express = require("express");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");

//settings
app.set("port", process.env.PORT || 5000);
app.set("llave", process.env.SEED_AUTENTICACION);

//middlewares
app.use(cors()); //permite poder enviar datos entre servidores
app.use(express.json()); //permite q el servidro entienda datos json

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

//routes
//app.get("/api/user", (req, res) => res.send("Riuta"));
app.use("/api/login", require("./routes/login"));
app.use("/api/user", rutasProtegidas, require("./routes/users"));

module.exports = app;
