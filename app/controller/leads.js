const { response, request } = require("express");
var Request = require("tedious").Request;
var TYPES = require("tedious").TYPES;
var Connection = require("tedious").Connection;

const leadsGET = (req = request, res = response) => {
  res.json({ message: "Estás conectado a la API. Recurso: lead" });
};

const leadsSearch = (req = request, res = response) => {
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
};

const leadsPOST = async (req, res = response) => {
  //de preferencia usar esta estructura de abajo para controlar información sensible
  //creando la instancia new Usuario, solo va a mostrar la data que envien que este declarada en el modelo
  const { nombre, email, password, rol } = req.body;
  const usuario = new Usuario({ nombre, email, password, rol });

  //encryptar password
  const salt = bcryptjs.genSaltSync(10);
  usuario.password = bcryptjs.hashSync(password, salt);

  //Guardar en BD
  await usuario.save();

  res.json({
    msg: "post API - usuariosPost",
    usuario,
  });
};

const leadsPUT = async (req, res = response) => {
  const { id } = req.params;
  const { _id, password, google, email, ...resto } = req.body;

  // TODO validar contra bd
  if (password) {
    const salt = bcryptjs.genSaltSync(10);
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const usuario = await Usuario.findByIdAndUpdate(id, resto);
  res.json({
    msg: "put API - usuariosPut",
    usuario,
  });
};

const leadsDELETE = (req, res = response) => {
  res.json({
    msg: "delete API - usuariosDelete",
  });
};

module.exports = {
  leadsGET,
  leadsPOST,
  leadsPOST,
  leadsDELETE,
  leadsSearch,
};
