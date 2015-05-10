// http_server.js

var http = require('http');
var fs = require('fs');
var file_name = process.argv[3];
var server = http.createServer(function(req, res){

var file_object = fs.createReadStream(file_name,{'flags':'r'});
file_object.pipe(res);


})
server.listen(process.argv[2]);