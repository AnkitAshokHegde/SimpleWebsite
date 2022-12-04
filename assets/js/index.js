// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
   
//     var sql = require("mssql");

//     // config for your database
//     var config = {
//         user: 'sa',
//         password: 'mypassword',
//         server: 'localhost', 
//         database: 'SchoolDB' 
//     };

//     // connect to your database
//     sql.connect(config, function (err) {
    
//         if (err) console.log(err);

//         // create Request object
//         var request = new sql.Request();
           
//         // query to the database and get the records
//         request.query('select * from Student', function (err, recordset) {
            
//             if (err) console.log(err)

//             // send records as a response
//             res.send(recordset);
            
//         });
//     });
// });

// var server = app.listen(5000, function () {
//     console.log('Server is running..');
// });




const express = require('exress');
var app = express();
var PORT = 8590;
app.get('/', (req, res)=>{
    req.send("GET request is sent\n");
});

app.post('/', (req, res)=>{
    res.send("POST request is sent\n");
});

app.listen(PORT, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("The server is running on th eport no : ", PORT);
    }
});