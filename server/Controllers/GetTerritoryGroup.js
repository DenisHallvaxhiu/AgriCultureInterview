const dbConfig = require("../Database/database");
const sql = require("mssql");

async function GetTerritoryGroup(callback) {

    getTerritoryGroupSqlNorthA= "Select Count(*)as Amount,MAX(SalesTerritoryGroup)as Territory from DimSalesTerritory where SalesTerritoryGroup = 'North America'"
    getTerritoryGroupSqlEurope= "Select Count(*)as Amount,MAX(SalesTerritoryGroup)as Territory from DimSalesTerritory where SalesTerritoryGroup = 'Europe'"
    getTerritoryGroupSqlPacific= "Select Count(*)as Amount,MAX(SalesTerritoryGroup)as Territory from DimSalesTerritory where SalesTerritoryGroup = 'Pacific'"

  try {
    // make sure that any items are correctly URL encoded in the connection string
    await sql.connect(dbConfig);
    const result = await sql.query(
      `${getTerritoryGroupSqlNorthA} Union ${getTerritoryGroupSqlEurope} union ${getTerritoryGroupSqlPacific}`
    );
    return callback(null, result.recordsets[0]);
  } catch (err) {
    return callback(err, null);
  }
}

module.exports = GetTerritoryGroup;
