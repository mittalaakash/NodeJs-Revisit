const http = require('http');

const server = http.createServer((req, res) => {
  //plain text
  //   res.writeHead(200, { 'Content-Type': 'text/plain' });
  //   res.end('Hello World!');

  //sending JSON response
  const obj = { name: 'Mridul', sex: 'male' };
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(obj));
});

server.listen(3000, () => {
  console.log('listening to port');
});
