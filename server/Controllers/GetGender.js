const dbConfig = require("../Database/database");
const sql = require("mssql");

async function GetGender(callback) {

    getGenderSql= "Select Count(*) as Amount,MAX(Gender) as Gender from DimEmployee where Gender = 'F' union Select Count(*),MAX(Gender) as Gender from DimEmployee where Gender = 'M' "

  try {
    // make sure that any items are correctly URL encoded in the connection string
    await sql.connect(dbConfig);
    const result = await sql.query(
      `${getGenderSql} `
    );
    return callback(null, result.recordsets[0]);
  } catch (err) {
    return callback(err, null);
  }
}

module.exports = GetGender;
