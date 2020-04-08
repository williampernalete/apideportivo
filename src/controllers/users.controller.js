const userController = {};
const userModel = require("../models/User");
const jwt = require("jsonwebtoken");
//const bcrypt = require("bcrypt");

userController.createUser = async (req, res) => {
  const { username, password } = req.body;
  const newUser = new userModel({
    username: username,
    password: password,
  });
  await newUser.save();
  res.json({ mensaje: "user created" });
};

userController.getUser = async (req, res) => {
  const listUser = await userModel.find();
  res.json(listUser);
};

userController.login = (req, res) => {
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

    var token = jwt.sign(tokenData, process.env.SEED_AUTENTICACION, {
      expiresIn: process.env.CADUCIDAD_TOKEN, //300 segundos = 5 min
    });

    res.json({
      mensaje: "Autentificacion Exitosa",
      user: userBD.username,
      token,
    });
  });
};

module.exports = userController;
