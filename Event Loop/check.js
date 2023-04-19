const fs = require('fs');

setTimeout(() => {
  console.log('timer');
}, 3);

fs.readFile(__filename, () => {
  console.log('file read');

  setImmediate(() => {
    console.log('immediate call');
  });

  Promise.resolve().then(() => {
    console.log('promise ');
  });
  process.nextTick(() => {
    console.log('next tick');
  });
});
