const DB = require("../utils/constants.json");
const { test, prod } = DB;

const dbConfig = {
  user: test.userDB,
  password: test.passwordDB,
  server: test.server,
  database: test.database,
  synchronize: true,
  trustServerCertificate: true,
};

module.exports = dbConfig;
