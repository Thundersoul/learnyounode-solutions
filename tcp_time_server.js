// tcp_time_server.js

//  date_format = "YYYY-MM-DD hh:mm"
var net = require('net');
var strftime = require('strftime');
var datatime = new Date();
var server = net.createServer(function(socket){

	//console.log("client connected");
	socket.write(strftime('%F %H:%M', datatime) + "\n");
	//socket.write("hello world.");
	socket.end();

})
server.listen(process.argv[2], function(){

	//console.log("server bound.");

});