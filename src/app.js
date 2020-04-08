const express = require("express");
const cors = require("cors");
const app = express();

//settings
app.set("port", process.env.PORT || 5000);

//middlewares
app.use(cors()); //permite poder enviar datos entre servidores
app.use(express.json()); //permite q el servidro entienda datos json

//routes
//app.get("/api/user", (req, res) => res.send("Riuta"));
app.use("/api/user", require("./routes/users"));

module.exports = app;
