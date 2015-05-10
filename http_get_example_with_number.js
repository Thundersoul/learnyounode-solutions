//http_get_example_with_number.js
var http = require('http');
var concat = require('concat-stream');
url = process.argv[2];

http.get(url, function(response){

	response.pipe(concat(function(data){
		data = data.toString();
		console.log(data.length);
		console.log(data);

	}))

});