const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Home page');
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About page');
  } else if (req.url == '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        name: 'Mridul',
        sex: 'male',
      }),
    );
  } else {
    res.writeHead(404);
    res.end('Page not Found!');
  }

  res.end();
});

server.listen(3000, () => {
  console.log('listening to port');
});
