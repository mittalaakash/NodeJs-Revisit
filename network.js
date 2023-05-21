const https = require('https');
const crypto = require('crypto');

const MAX_CALLS = 40;

const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
  https
    .request('https://www.google.com', res => {
      res.on('data', () => {});
      res.on('end', () => {
        console.log(`Reqeust: ${i + 1}`, Date.now() - start);
      });
    })
    .end();
}
