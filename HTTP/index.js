const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  //plain text
  //   res.writeHead(200, { 'Content-Type': 'text/plain' });
  //   res.end('Hello World!');

  //sending JSON response
  //   const obj = { name: 'Mridul', sex: 'male' };
  //   res.writeHead(200, { 'Content-Type': 'application/json' });
  //   res.end(JSON.stringify(obj));

  // html response
  //   res.writeHead(200, { 'Content-Type': 'text/html' });
  //   res.end('<h1>Hello World!</h1>');

  //html file
  const html = fs.readFileSync('./index.html', 'utf-8');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

server.listen(3000, () => {
  console.log('listening to port');
});
