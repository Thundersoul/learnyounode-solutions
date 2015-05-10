//my_module.js
var fs = require('fs');
var path = require('path');
module.exports = function readDir(dir_name, file_ext, callback){
	fs.readdir(dir_name, function(err, list)
	{
		var fileList = [];
		callback = (typeof callback === 'function') ? callback : function(){};
		if(err)
		{
			return callback(err)
		}

		for(i in list)
			{

			if(path.extname(list[i]) == '.' + file_ext)
				{
				fileList.push(list[i]);
				}
			}
	return callback(null, fileList)
	//console.log(list);
});
}