const mongoose = require("mongoose");

const URI_BD = process.env.MONGODB_URI;

//PErmite conectarme a la BD
mongoose.connect(URI_BD, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

const conex = mongoose.connection;
//verificamos que me conecte
conex.once("open", () => {
  console.log("conect to BD");
});
