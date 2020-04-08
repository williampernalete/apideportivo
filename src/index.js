require("dotenv").config();

const app = require("./app.js");
require("./database.js");

//crramos el servidor
async function main() {
  await app.listen(app.get("port"));
  console.log("server UP", app.get("port"));
}

main();
