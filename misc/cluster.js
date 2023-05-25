const cluster = require('cluster');
const http = require('http');

cluster.schedulingPolicy = cluster.SCHED_RR;

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker ${process.pid} started`);

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
}
