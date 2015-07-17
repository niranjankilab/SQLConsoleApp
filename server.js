var sql = require('node-sqlserver-unofficial');
var http = require('http');
var connectionString = 'Driver={SQL Server Native Client 11.0};Server=tcp:niranjankadbserver.database.windows.net,1433;Database=AdventureWorks;Uid=nksharma@niranjankadbserver;Pwd=Adusa@123;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;';
var testQuery = "SELECT 1";
var awQuery = 'SELECT [EmailAddress] as emailid from [AdventureWorks].[SalesLT].[Customer]';

var port = process.env.PORT || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("node " + process.version + " " + process.arch + ".\n");
    
    sql.query(connectionString, awQuery, function (err, result) {
        if (err)
            res.end("Query Failed \n" + err);
        else
            var r = Math.floor((Math.random() * 100) + 1);
            res.end("Query result: " + result[r].emailid + " \n");
    });
}).listen(port);