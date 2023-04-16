const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const name = 'Mridul';
  let html = fs.readFileSync('./index.html', 'utf-8'); //(__dirname+'/index.html')
  html = html.replace('{{name}}', name);
  res.end(html);
});

server.listen(3000, () => {
  console.log('listening to port');
});
