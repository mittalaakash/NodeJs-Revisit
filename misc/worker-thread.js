const { parentPort, isMainThread, threadId } = require('worker_threads');

console.log('worker-thread ', isMainThread, threadId);
let j = 0;
for (let index = 0; index < 5000000; index++) {
  j++;
}

parentPort.postMessage(j);
