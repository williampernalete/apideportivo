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

module.exports = userController;
