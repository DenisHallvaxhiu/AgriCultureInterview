// Requiring module
const express = require('express');
const getEmployees = require('./Controllers/GetEmployees')
var cors = require('cors')

require('dotenv').config()

// Creating express object
const app = express();
app.use(cors())

// Handling GET request
app.get('/getCurrentEmployees', (req, res) => {
    getEmployees((error,result)=>{
        if(error)
        res.send(error)
        else
        res.json(result)
    })
})
// Port Number
const PORT = process.env.PORT ||5000;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));
