loginController = {};
const userModel = require("../models/User");
const jwt = require("jsonwebtoken");

loginController.login = (req, res) => {
  const user = req.body.username;
  const pass = req.body.password;

  userModel.findOne({ username: user }, (error, userBD) => {
    if (error) {
      return res.status(500).json({
        err: error,
      });
    }
    //verificamos q el usuario exista
    if (!userBD) {
      return res.status(400).json({
        err: { mensaje: "Usuario o contraseña incorrectos" },
      });
    }

    //valida si el password recibido es igual al de BD
    if (req.body.password != userBD.password) {
      return res.status(400).json({
        mensaje: "Usuario o contraseña incorrectos, intente de nuevo",
      });
    }

    var tokenData = {
      user: user,
      pass: pass,
    };

    var llave = process.env.SEED_AUTENTICACION;
    var expira = process.env.CADUCIDAD_TOKEN;

    var token = jwt.sign(tokenData, llave, {
      expiresIn: 300, //300 segundos = 5 min
    });

    res.json({
      mensaje: "Acceso Exitosa",
      user: userBD.username,
      token,
    });
  });
};

module.exports = loginController;
