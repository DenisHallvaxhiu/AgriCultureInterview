const dbConfig = require("../Database/database");
const sql = require("mssql");

async function getEmployees(callback) {
  try {
    // make sure that any items are correctly URL encoded in the connection string
    await sql.connect(dbConfig);
    const result = await sql.query(
      "Select DepartmentName,BaseRate from DimEmployee where Status = 'Current'"
    );
    return callback(null, result.recordsets[0]);
  } catch (err) {
    return callback(err, null);
  }
}

module.exports = getEmployees