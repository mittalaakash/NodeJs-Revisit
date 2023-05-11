const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream('./file.txt', {
  encoding: 'utf-8',
  highWaterMark: 2, // changes the chunk size to 1kb
});

readableStream.pipe(gzip).pipe(fs.createWriteStream('./file3.txt.gz'));

const writableStream = fs.createWriteStream('./file2.txt');

readableStream.pipe(writableStream);
