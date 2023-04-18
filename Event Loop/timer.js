setTimeout(() => {
  console.log('timer 1');
}, 0);

setTimeout(() => {
  console.log('timer 2');
  process.nextTick(() => {
    console.log('nextTick inside timer');
  });
}, 0);

setTimeout(() => {
  console.log('timer 3');
  Promise.resolve().then(() => {
    console.log('promise inside timer');
  });
}, 0);

setTimeout(() => {
  console.log('timer 4');
}, 0);
