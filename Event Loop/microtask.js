process.nextTick(() => {
  console.log('nextTick queue 1');
});
process.nextTick(() => {
  console.log('nextTick queue 2');

  process.nextTick(() => {
    console.log('next tick inside next tick');
  });
});

process.nextTick(() => {
  console.log('nextTick queue 3');
});

Promise.resolve().then(() => {
  console.log('promise resolved 1');
});
Promise.resolve().then(() => {
  console.log('promise resolved 2');
  process.nextTick(() => {
    console.log('next tick inside promise');
  });
});
Promise.resolve().then(() => {
  console.log('promise resolved 3');
});
