// file_read.js
var fs = require('fs');
buff = fs.readFileSync(process.argv[2]);
var str = buff.toString();
var substr = str.split("\n");
console.log(substr.length-1);