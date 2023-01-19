const express = require("express"); //llamamos a Express
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080; // establecemos nuestro puerto

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
const router = require("./app/routes");
app.use("/api", router);

//arrancamos el servidor
app.listen(port);
console.log("API escuchando en el puerto " + port);

// Export the Express API
module.exports = app;
