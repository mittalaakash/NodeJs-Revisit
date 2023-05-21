const fs = require('fs/promises');

(async () => {
  try {
    console.log('hello');
    const start = Date.now();
    while (Date.now() - start < 3000) {}
    // const data = await fs.readFile('./file.txt', 'utf-8');
    console.log('say');
    // console.log(data);
  } catch (err) {
    console.log(err);
  }
})();

console.log('hi');
