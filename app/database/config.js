var sql = require("mssql");

// config for your database
var config = {
  user: "",
  password: "",
  server: "",
  database: "",
  synchronize: true,
  trustServerCertificate: true,
};

// connect to your database
sql.connect(config, function (err) {
  if (err) console.log(err);

  // create Request object
  var request = new sql.Request();

  // query to the database and get the records
  request.query("select * from MASTER_TABLE2", function (err, recordset) {
    if (err) console.log(err);

    // send records as a response
    res.send(recordset);
  });
});
