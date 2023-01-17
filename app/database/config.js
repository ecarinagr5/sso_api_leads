var Connection = require("tedious").Connection;
var config = {
  server: "azrarenabi.southcentralus.cloudapp.azure.com",
  authentication: {
    type: "default",
    options: {
      userName: "USR_CHIREY",
      password: "$vE97zCu",
    },
  },
  options: {
    // If you are on Microsoft Azure, you need encryption:
    encrypt: true,
    database: "WEBSITE_CHIREY", //update me
  },
};
var connection = new Connection(config);
connection.on("connect", function (err) {
  // If no error, then good to proceed.
  console.log("Connected");
});

connection.connect();

module.exports = {
  connection,
};
