const cluster = require('cluster');
console.log(cluster.isMaster, cluster.isPrimary, cluster.isWorker);
console.log(process.pid, 'hell');
if (cluster.isMaster) {
  console.log(process.pid, 'hell');
  console.log('master');
  cluster.fork();
  cluster.on('exit', (worker, code, signal) => {
    console.log(
      `Worker process ${worker.process.pid} exited with code ${code}`,
    );
  });
} else {
  console.log('worker');
  process.exit(0);
}
