const { response, request } = require("express");
const dbConfig = require("../database/config");
let sql = require("mssql");

const leadsGet = (req = request, res = response) => {
  res.status(200).json({ message: "Estás conectado a la API. Recurso: lead" });
};

const leadsSearch = (req = request, res = response) => {
  // connect to your database
  sql.connect(dbConfig, function (err) {
    if (err) console.log(err);
    const request = new sql.Request();
    // query to the database and get the records
    request.query(
      "select * from MASTER_TABLE2 ORDER BY LEAD_ID DESC",
      function (err, recordset) {
        if (err) console.log(err);
        // send records as a response
        res.send(recordset);
      }
    );
  });
};

const leadsById = (req = request, res = response) => {
  // connect to your database
  sql.connect(dbConfig, function (err) {
    if (err) console.log(err);
    const request = new sql.Request();
    // query to the database and get the records
    request.query(
      "select TOP 1 * from MASTER_TABLE2 ORDER BY LEAD_ID DESC",
      function (err, recordset) {
        if (err) console.log(err);
        // send records as a response
        res.send(recordset);
      }
    );
  });
};

const leadsPost = async (req, res = response) => {
  const {
    LEAD_ID,
    LD_NAME,
    LD_LAST_NAME,
    LD_EMAIL,
    LD_PHONE_NUM,
    LD_ZIPCODE,
    VENDOR_ID,
    MODEL_ID,
    CAMPAIGN,
    LD_REG_DATE,
    UTM_SOURCE,
    UTM_MEDIUM,
    UTM_CAMPAIGN,
    TD_DATE,
    TD_HOUR,
    QTN_PRICE,
    QTN_TERM_OF_FINANCE,
    QTN_DOWN_PAYMENT,
    QTN_AMOUNT,
    QTN_FINANCING_PLAN,
    QTN_INSURANCE_COMPANY,
  } = req.body;

  const TD_DATE_FL = new Date(TD_DATE)
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
  const TD_HOUR_FL = new Date(TD_HOUR)
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
  let insert =
    "insert into MASTER_TABLE2(LEAD_ID,LD_NAME,LD_LAST_NAME,LD_EMAIL,LD_PHONE_NUM,LD_ZIPCODE,VENDOR_ID,MODEL_ID,CAMPAIGN,LD_REG_DATE,UTM_SOURCE,UTM_MEDIUM,UTM_CAMPAIGN,TD_DATE,TD_HOUR,QTN_PRICE,QTN_TERM_OF_FINANCE,QTN_DOWN_PAYMENT,QTN_AMOUNT,QTN_FINANCING_PLAN,QTN_INSURANCE_COMPANY) values ('" +
    LEAD_ID +
    "','" +
    LD_NAME +
    "', '" +
    LD_LAST_NAME +
    "','" +
    LD_EMAIL +
    "', '" +
    LD_PHONE_NUM +
    "','" +
    LD_ZIPCODE +
    "','" +
    VENDOR_ID +
    "','" +
    MODEL_ID +
    "','" +
    CAMPAIGN +
    "','" +
    LD_REG_DATE +
    "','" +
    UTM_SOURCE +
    "','" +
    UTM_MEDIUM +
    "','" +
    UTM_CAMPAIGN +
    "','" +
    TD_DATE_FL +
    "','" +
    TD_HOUR_FL +
    "','" +
    QTN_PRICE +
    "','" +
    QTN_TERM_OF_FINANCE +
    "','" +
    QTN_DOWN_PAYMENT +
    "','" +
    QTN_AMOUNT +
    "','" +
    QTN_FINANCING_PLAN +
    "','" +
    QTN_INSURANCE_COMPANY +
    "')";

  sql.connect(dbConfig, function (err) {
    if (err) console.log(err);
    const request = new sql.Request();
    // query to the database and get the records
    request.query(insert, function (err, rows) {
      if (err) throw err;
      res.send("Value has been inserted");
    });
  });
};

const leadsPut = async (req, res = response) => {
  const { id } = req.params;
  const { _id, password, google, email, ...resto } = req.body;

  // TODO validar contra bd
  if (password) {
    const salt = bcryptjs.genSaltSync(10);
    resto.password = bcryptjs.hashSync(password, salt);
  }
  const usuario = await Usuario.findByIdAndUpdate(id, resto);
  res.json({
    msg: "lead added successfully",
    usuario,
  });
};

const leadsDelete = (req, res = response) => {
  res.json({
    msg: "delete API - usuariosDelete",
  });
};

module.exports = {
  leadsGet,
  leadsPost,
  leadsPut,
  leadsDelete,
  leadsSearch,
  leadsById,
};
