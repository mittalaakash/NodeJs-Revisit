const fs = require('fs');

const readStream = fs.createReadStream(__filename);
readStream.close();

readStream.on('close', () => {
  console.log('close callback');
});
