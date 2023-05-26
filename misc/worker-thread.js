const { parentPort } = require('worker_threads');

let j = 0;
for (let index = 0; index < 5000000000; index++) {
  j++;
}

parentPort.postMessage(j);
