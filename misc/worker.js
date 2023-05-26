const http = require('http');
const { Worker } = require('worker_threads');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    console.log(process.pid, 'home page request');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Home Page');
  } else if (req.url === '/slow') {
    console.log(process.pid, 'slow page request');
    // simulate CPU work
    const worker = new Worker('./worker-thread.js');
    worker.on('message', j => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Slow Page ${j}`);
    });
  }
});

server.listen(3000, () => {
  console.log('server is listening on port:3000');
});
