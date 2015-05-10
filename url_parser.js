// url_parser.js
var url = require('url');
var http = require('http');
var server = http.createServer(function(req, res){

	var parsed_url = url.parse(req.url, true);
	iso_date = parsed_url.query['iso'];
	var date = new Date(iso_date);
	if(parsed_url.pathname == "/api/parsetime")
	{
		var date_obj = new Object();
		date_obj.hour = date.getHours();
		date_obj.minute = date.getMinutes();
		date_obj.second = date.getSeconds();
		var json_format_date = JSON.stringify(date_obj);
		res.end(json_format_date);
		//console.log(json_format_date);
	}

	else if(parsed_url.pathname =="/api/unixtime")
	{

		var date_obj = new Object();
		date_obj.unixtime = date.getTime();
		res.end(JSON.stringify(date_obj));
		//console.log(JSON.stringify(date_obj));

	}
		res.writeHead(200, { 'Content-Type' : 'application/json' });

})
server.listen(process.argv[2]);