require("dotenv").config();

var dbConfig = {
    user:  process.env.dbUsername,
    password: process.env.Password,
    server: process.env.ServerName,
    database: process.env.Database,
    options: {
        "enableArithAbort": true,
        "encrypt":false
    }
};


module.exports = dbConfig;
