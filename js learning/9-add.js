//9add.js
const args = process.argv.slice(2);
const a = parseInt(args[0]);
const b = parseInt(args[1]);

function add(x, y) {
  return x + y;
}

console.log(add(a,b ));
