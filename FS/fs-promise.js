const fs = require('fs/promises');

console.log('first');

fs.readFile('./file.txt', 'utf-8')
  .then(data => console.log(data))
  .catch(err => console.log(err));

console.log('second');

// using async await IIFE
(async () => {
  try {
    const data = await fs.readFile('./file.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
})();

// or regular function

async function readFile() {
  try {
    const data = await fs.readFile('./file.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
readFile();
