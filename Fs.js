const fs = require('fs');

const fileContents = fs.readFileSync('./file.txt');
fileContents.write('Hello World');
console.log(fileContents.toString());
