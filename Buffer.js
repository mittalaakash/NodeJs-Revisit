const buffer = Buffer.from('Apple');

console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());

buffer.write('Ma');
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
