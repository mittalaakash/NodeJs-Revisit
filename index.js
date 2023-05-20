process.nextTick(() => console.log('promise resolved'));
Promise.resolve().then(() => {
  console.log('timeout');
  process.nextTick(() => console.log('promise resolved inside set'));
}, 0);
process.nextTick(() => console.log('promise resolved'));
process.nextTick(() => console.log('promise resolved'));
process.nextTick(() => {
  while (Date.now() - start < 2000) {}
  Promise.resolve().then(() => {
    console.log('timeout inside');
  }, 0);
  if (Date.now() - start >= 1900) console.log('promise resolved with time');
});
console.log('hello');

const start = Date.now();

while (Date.now() - start < 2000) {}

if (Date.now() - start >= 2000) console.log('timed');
