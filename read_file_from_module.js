//read_file_from_module.js
var mymodule = require('./my_module.js');
mymodule(process.argv[2], process.argv[3], function(err, data){

	if(err)
	{

		console.log("error occurs" + err);
	}

	for(data_val in data)
	{

		console.log(data[data_val]);
	}
});