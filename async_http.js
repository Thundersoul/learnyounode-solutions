//async_http.js
var http = require('http');
var concat = require('concat-stream');
var queue = [];
var count = 0;


function httpGet(index)
	{

		http.get(process.argv[2 + index], function(response)
		{
			response.setEncoding('utf8');
			response.pipe(concat(function(data)
			{
				queue[index] = data.toString();
				count++;
				if(count == 3)
					{
						for(var i in queue)
						{

							console.log(queue[i]);

						}
					}

			}));

		});
	}

for(var j = 0;j < 3;j++)
{

	httpGet(j);

}