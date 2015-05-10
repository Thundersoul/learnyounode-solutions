// addition.js
var num_list = +process.argv.length;
var sum = 0;
for(var i =2;i < +process.argv.length;i++)
	{

		sum += +process.argv[i];

	}
console.log(sum);