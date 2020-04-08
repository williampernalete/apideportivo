const { Router } = require("express");
const router = Router();

const { createUser, getUser } = require("../controllers/users.controller");

router
  .route("/")
  //.get((req, res) => res.json({ Mensaje: "GET USers" }))
  .get(getUser)
  .post(createUser);

module.exports = router;
