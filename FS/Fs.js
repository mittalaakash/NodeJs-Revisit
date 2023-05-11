const fs = require('fs');

// const fileContents = fs.readFileSync('./file.txt');
// fileContents.write('Hello World');
// console.log(fileContents.toString());

//NOTE:  IF WE DON'T PASS CHARACECTER ENCODING, WE GET A BUFFER
const fileContents = fs.readFileSync('./file.txt', 'utf-8');
console.log(fileContents);

fs.readFile('./file.txt', 'utf-8', (err, data) => {
  if (err) console.log(err);
  else {
    console.log('from read file ', data);
  }
});

// flag: 'a' means append

fs.writeFileSync('./greet.txt', ' Hello bru', { flag: 'a' });

fs.writeFile('./greet.txt', ' Hello Bros', { flag: 'a' }, err => {
  if (err) console.log(err);
  else console.log('File successfully written!');
});
