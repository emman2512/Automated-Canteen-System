var express = require('express');
var path = require('path');
var app = express();
var ip = require('ip');


console.log("The server works on " + ip.address() + ":4444");
app.use(express.static(__dirname + '/public'))
 
app.get('/', function (req, res) {
          res.sendFile(path.join(__dirname + '/index.html'));
	

});


app.listen(4444);