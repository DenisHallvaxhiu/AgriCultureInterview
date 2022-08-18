// Requiring module
const express = require("express");
const bodyParser = require('body-parser')
var cors = require("cors");
const GetAllDS = require("./Controllers/GetAllDS");
const GetGender = require("./Controllers/GetGender");
const GetTerritoryGroup = require("./Controllers/GetTerritoryGroup");
const GetLogin = require("./Controllers/GetLogin");

require("dotenv").config();

// Creating express object
const app = express();
app.use(bodyParser.json())
app.use(cors());

// Handling GET request

app.get("/GetAllDS", (req, res) => {
  GetAllDS((error, result) => {
    if (error) res.send(error);
    else res.json(result);
  });
});

app.get("/GetGender",(req,res)=>{
  GetGender((error,result)=>{
    if (error) res.send(error);
    else res.json(result);
  })
})
app.get("/GetTerritoryGroup",(req,res)=>{
  GetTerritoryGroup((error,result)=>{
    if (error) res.send(error);
    else res.json(result);
  })
})
app.post("/GetLogin",(req,res)=>{
  console.log(req.body)
  GetLogin(req,(error,result)=>{
    if (error) res.send(error);
    else res.json(result);
  })
})

// Port Number
const PORT = process.env.PORT || 5000;

// Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));
