const fs = require('fs');

setTimeout(() => {
  console.log('timer');
}, 3);

fs.readFile(__filename, () => {
  console.log('file read');
});
