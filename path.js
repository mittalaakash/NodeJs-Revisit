const path = require('path');

console.log(path.basename(__filename));

console.log(path.extname(__filename));

console.log(path.parse(__filename));

console.log(path.format(path.parse(__filename)));

console.log(path.isAbsolute(__filename));

console.log(path.join('folder1', 'folder2', 'data.js'));
