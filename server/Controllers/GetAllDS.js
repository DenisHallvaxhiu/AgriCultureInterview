const dbConfig = require("../Database/database");
const sql = require("mssql");

async function GetAllDS(callback) {
  GetDocumentControlDS =
    "Select Sum(BaseRate)as Salary, MAX(DepartmentName) as Department from DimEmployee where Status = 'Current' AND DepartmentName = 'Document Control'";
  GetEngineeringDS =
    "Select Sum(BaseRate)as Salary, MAX(DepartmentName) as Department from DimEmployee where Status = 'Current' AND DepartmentName = 'Engineering'";
  GetFinanceDS =
    "Select Sum(BaseRate)as Salary, MAX(DepartmentName) as Department from DimEmployee where Status = 'Current' AND DepartmentName = 'Finance'";
  GetHumanResourcesDS =
    "Select Sum(BaseRate)as Salary, MAX(DepartmentName) as Department from DimEmployee where Status = 'Current' AND DepartmentName = 'Human Resources'";
  GetInformationServiceDS =
    "Select Sum(BaseRate) as Salary, MAX(DepartmentName) as Department from DimEmployee where Status = 'Current' AND DepartmentName = 'Information Services'";
  GetMarketingDS =
    "Select Sum(BaseRate)as Salary, MAX(DepartmentName) as Department from DimEmployee where Status = 'Current' AND DepartmentName = 'Marketing'";
  GetProductionDS =
    "Select Sum(BaseRate)as Salary, MAX(DepartmentName) as Department from DimEmployee where Status = 'Current' AND DepartmentName = 'Production'";
  GetPurchasingDS =
    "Select Sum(BaseRate)as Salary, MAX(DepartmentName) as Department from DimEmployee where Status = 'Current' AND DepartmentName = 'Purchasing'";
  GetSalesDS =
    "Select Sum(BaseRate)as Salary, MAX(DepartmentName) as Department from DimEmployee where Status = 'Current' AND DepartmentName = 'Sales'";
  GetShippingandReceivingDS =
    "Select Sum(BaseRate)as Salary, MAX(DepartmentName) as Department from DimEmployee where Status = 'Current' AND DepartmentName = 'Shipping and Receiving'";
  GetToolDesignDS =
    "Select Sum(BaseRate)as Salary, MAX(DepartmentName) as Department from DimEmployee where Status = 'Current' AND DepartmentName = 'Tool Design'";
  try {
    // make sure that any items are correctly URL encoded in the connection string
    await sql.connect(dbConfig);
    const result = await sql.query(
      `${GetToolDesignDS} UNION ${GetShippingandReceivingDS} UNION ${GetSalesDS} UNION ${GetPurchasingDS} UNION ${GetProductionDS} UNION ${GetMarketingDS} UNION ${GetInformationServiceDS} UNION ${GetHumanResourcesDS} UNION ${GetFinanceDS} UNION ${GetEngineeringDS} UNION ${GetDocumentControlDS} `
    );
    return callback(null, result.recordsets[0]);
  } catch (err) {
    return callback(err, null);
  }
}

module.exports = GetAllDS;
