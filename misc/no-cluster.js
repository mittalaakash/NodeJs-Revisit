const http = require('http');
require('dotenv').config();

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    console.log(process.pid, 'home page request');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Home Page');
  } else if (req.url === '/slow') {
    console.log(process.pid, 'slow page request');

    for (let index = 0; index < 5000000000; index++) {} // simulate CPU work
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Slow Page');
  }
});

server.listen(3000, () => {
  console.log('server is listening on port:3000');
});
