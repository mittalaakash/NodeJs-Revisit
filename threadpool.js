const crypto = require('crypto');

//change threadpool UV_THREADPOOL_SIZE
//write pbkdf2Sync in threadpool
// process.env.UV_THREADPOOL_SIZE = 5;
//write pbkdf2 in threadpool
// process.env.UV_THREADPOOL_SIZE = 5;

const start = Date.now();
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('1:', Date.now() - start);
});
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('2:', Date.now() - start);
});
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('3:', Date.now() - start);
});
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('4:', Date.now() - start);
});
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log('5:', Date.now() - start);
});

// change threadpool size
// process.env.UV_THREADPOOL_SIZE = 1; in the file for mac
// $env:UV_THREADPOOL_SIZE=2 & node index.js  for windows powershell
//  SET UV_THREADPOOL_SIZE=2 & node index.js for windows cmd
