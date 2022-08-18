const dbConfig = require("../Database/database");
const sql = require("mssql");

async function GetLogin(req,callback) {
  let username = req.body.username
  let password = req.body.password
  getGenderSql =
    `SELECT FirstName,LastName from DimEmployee where FirstName = '${username}' And LastName = '${password}'`;

  try {
    // make sure that any items are correctly URL encoded in the connection string
    await sql.connect(dbConfig);
    const result = await sql.query(`${getGenderSql} `);
    return callback(null, result.recordsets[0]);
  } catch (err) {
    return callback(err, null);
  }
}

module.exports = GetLogin;
