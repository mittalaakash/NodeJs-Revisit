const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream('./file.txt', {
  encoding: 'utf-8',
  highWaterMark: 2, // changes the chunk size to 1kb
});

const writableStream = fs.createWriteStream('./file2.txt');

// readableStream.on('data', chunk => {
//   console.log(chunk);
//   writableStream.write(chunk);
// });

//OR we can do it using pipe
readableStream.pipe(writableStream);
