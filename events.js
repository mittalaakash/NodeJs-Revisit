const EventEmitter = require('node:events');

const emitter = new EventEmitter();

emitter.on('order-pizza', (size, topping) => {
  console.log(`order received, baking ${size} pizza with ${topping}`);
});

emitter.on('order-pizza', (size, topping) => {
  if (size == 'large') {
    console.log(`add complimentary drink`);
  }
});

console.log('do this work before the order is placed!');

emitter.emit('order-pizza', 'large', 'mushroom');
